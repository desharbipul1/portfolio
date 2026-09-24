# Multi-stage build for portfolio
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Clean npm cache and remove lock file to regenerate for Linux
RUN npm cache clean --force && \
    rm -f package-lock.json

# Install dependencies (this will regenerate package-lock.json for Linux/Alpine)
RUN npm install

# Copy source code
COPY . .

# Build the project
RUN npm run build

# Verify dist directory was created
RUN test -d dist || (echo "Build failed - dist directory not created" && exit 1)

# Production stage - serve with nginx
FROM nginx:alpine

# Copy nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
