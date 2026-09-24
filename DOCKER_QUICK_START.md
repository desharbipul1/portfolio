# Docker Quick Reference

## Files Created

- **Dockerfile** - Multi-stage build configuration (Node.js + Nginx)
- **nginx.conf** - Nginx server configuration with security headers
- **docker-compose.yml** - Docker Compose setup for easy local development
- **.dockerignore** - Files to exclude from Docker build context
- **docker-build.sh** - Bash script for building and pushing (Linux/Mac)
- **docker-build.ps1** - PowerShell script for building and pushing (Windows)
- **DOCKER_DEPLOYMENT.md** - Comprehensive deployment guide

## Quick Start (3 commands)

### Using Docker Compose (Recommended)
```bash
# 1. Build and start
docker-compose up --build

# 2. Open browser to http://localhost

# 3. Stop when done
docker-compose down
```

### Using Docker Directly
```bash
# 1. Build
docker build -t portfolio:latest .

# 2. Run
docker run -d -p 80:80 portfolio:latest

# 3. Open browser to http://localhost
```

### Using Build Scripts

**Windows (PowerShell):**
```powershell
# Build only
.\docker-build.ps1

# Build and run locally
.\docker-build.ps1 -Run

# Build and push to Docker Hub
.\docker-build.ps1 -Username yourusername -Push -Run
```

**Linux/Mac (Bash):**
```bash
# Build only
./docker-build.sh

# Build and run locally
./docker-build.sh --run

# Build and push to Docker Hub
./docker-build.sh --username yourusername --push --run
```

## Pushing to Docker Hub

### 1. Create Docker Hub Account
Visit https://hub.docker.com and create a free account

### 2. Login to Docker
```bash
docker login
# Enter your username and password
```

### 3. Build and Tag
```bash
docker build -t yourusername/portfolio:latest .
```

### 4. Push
```bash
docker push yourusername/portfolio:latest
```

### View on Docker Hub
https://hub.docker.com/r/yourusername/portfolio

## Common Commands

```bash
# View all images
docker images

# View running containers
docker ps

# View all containers
docker ps -a

# View container logs
docker logs <container-id>

# Stop a container
docker stop <container-id>

# Remove a container
docker rm <container-id>

# Remove an image
docker rmi <image-id>

# Remove unused resources
docker system prune
```

## Accessing Your Portfolio

- **Local**: http://localhost
- **On Server**: http://your-server-ip
- **Docker Hub**: https://hub.docker.com/r/yourusername/portfolio

## Environment

The container runs with:
- **Base**: Node.js 18 Alpine (builder) → Nginx Alpine (production)
- **Port**: 80 (HTTP)
- **Optimization**: Multi-stage build, gzip compression, security headers
- **Health Check**: Built-in endpoint at `/health`

## File Sizes

- Builder stage: ~500MB (discarded after build)
- Final image: ~30-40MB (very efficient!)
- After compression: ~10-15MB when transferred

## Next Steps

1. **Customize content** - Update placeholders in your portfolio
2. **Build locally** - Test with `docker-compose up`
3. **Push to Docker Hub** - Share your image publicly
4. **Deploy** - Use on any cloud provider (AWS, Azure, Google Cloud, etc.)

## Troubleshooting

### Port 80 already in use?
```bash
docker run -p 8080:80 portfolio:latest
# Access at http://localhost:8080
```

### Container won't start?
```bash
docker logs <container-id>
# Shows error messages
```

### Need to rebuild?
```bash
docker build --no-cache -t portfolio:latest .
# Forces a full rebuild without cached layers
```

## Security Features

✅ Security headers (X-Frame-Options, CSP, etc.)
✅ Gzip compression enabled
✅ SPA routing configured
✅ Cache busting for assets
✅ Health check endpoint
✅ Alpine Linux (minimal attack surface)
✅ No root process

See **DOCKER_DEPLOYMENT.md** for comprehensive deployment guide!
