# Docker Deployment Guide

This guide provides instructions for building, running, and deploying your portfolio using Docker.

## Prerequisites

- Docker installed ([Get Docker](https://www.docker.com/get-started))
- Docker Compose installed (included with Docker Desktop)
- A Docker Hub account (for pushing to registry)

## Quick Start

### 1. Build the Docker Image

```bash
# Build the image locally
docker build -t portfolio:latest .

# Or with a specific tag
docker build -t yourusername/portfolio:v1.0 .
```

### 2. Run the Container Locally

```bash
# Run with default settings (port 80)
docker run -p 80:80 portfolio:latest

# Run with a different port
docker run -p 8080:80 portfolio:latest

# Run in the background (detached mode)
docker run -d -p 80:80 --name portfolio portfolio:latest

# View logs
docker logs portfolio

# Stop the container
docker stop portfolio

# Remove the container
docker rm portfolio
```

### 3. Using Docker Compose (Recommended)

```bash
# Start the container
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

Then access your portfolio at: `http://localhost`

## Pushing to Docker Hub

### 1. Login to Docker Hub

```bash
docker login
# Enter your Docker Hub username and password
```

### 2. Tag Your Image

```bash
# Use your Docker Hub username
docker tag portfolio:latest yourusername/portfolio:latest
docker tag portfolio:latest yourusername/portfolio:v1.0
```

### 3. Push the Image

```bash
# Push the latest tag
docker push yourusername/portfolio:latest

# Push a specific version
docker push yourusername/portfolio:v1.0

# Push all tags for the repository
docker push yourusername/portfolio
```

### 4. View on Docker Hub

Visit `https://hub.docker.com/r/yourusername/portfolio` to see your pushed image.

## Deploying to Production

### Option 1: Docker Hub Registry

```bash
# On your production server
docker pull yourusername/portfolio:latest
docker run -d -p 80:80 --restart unless-stopped yourusername/portfolio:latest
```

### Option 2: Private Docker Registry

```bash
# Tag for private registry
docker tag portfolio:latest your-registry.azurecr.io/portfolio:latest

# Push to Azure Container Registry
az acr login --name your-registry
docker push your-registry.azurecr.io/portfolio:latest
```

### Option 3: Cloud Platforms

#### AWS ECR
```bash
# Authenticate with AWS ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin 123456789.dkr.ecr.us-east-1.amazonaws.com

# Tag and push
docker tag portfolio:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/portfolio:latest
```

#### Google Cloud Registry
```bash
# Configure authentication
gcloud auth configure-docker

# Tag and push
docker tag portfolio:latest gcr.io/your-project/portfolio:latest
docker push gcr.io/your-project/portfolio:latest
```

#### Azure Container Registry
```bash
# Login to ACR
az acr login --name your-registry

# Tag and push
docker tag portfolio:latest your-registry.azurecr.io/portfolio:latest
docker push your-registry.azurecr.io/portfolio:latest
```

## Deployment Examples

### Docker Swarm
```bash
# Initialize swarm
docker swarm init

# Deploy service
docker service create --name portfolio -p 80:80 yourusername/portfolio:latest
```

### Kubernetes
```yaml
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portfolio
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portfolio
  template:
    metadata:
      labels:
        app: portfolio
    spec:
      containers:
      - name: portfolio
        image: yourusername/portfolio:latest
        ports:
        - containerPort: 80
        resources:
          requests:
            memory: "64Mi"
            cpu: "100m"
          limits:
            memory: "128Mi"
            cpu: "200m"
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 30
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: portfolio-service
spec:
  selector:
    app: portfolio
  type: LoadBalancer
  ports:
  - protocol: TCP
    port: 80
    targetPort: 80
```

Deploy to Kubernetes:
```bash
kubectl apply -f deployment.yaml
```

## Environment Variables

The Docker container supports the following environment variables:

```bash
docker run -e NODE_ENV=production portfolio:latest
```

## Performance Tips

1. **Multi-stage Build**: The Dockerfile uses multi-stage builds to reduce image size
2. **Alpine Linux**: Using nginx:alpine for smaller image footprint
3. **Caching**: Leverage Docker layer caching by installing dependencies before copying code
4. **Compression**: gzip compression enabled in nginx for faster asset delivery
5. **Security Headers**: Security headers configured in nginx.conf

## Troubleshooting

### Container won't start
```bash
# Check logs
docker logs portfolio

# Inspect the image
docker inspect portfolio:latest

# Run interactively for debugging
docker run -it portfolio:latest /bin/sh
```

### Port already in use
```bash
# Use a different port
docker run -p 8080:80 portfolio:latest

# Or find and stop the process using port 80
docker ps | grep ':80'
docker stop <container-id>
```

### Image too large
```bash
# Check image size
docker images | grep portfolio

# Prune unused images and layers
docker image prune
docker builder prune
```

## Best Practices

1. **Use version tags**: Always tag images with version numbers (v1.0, v1.1, etc.)
2. **Document images**: Add labels to your Dockerfile for metadata
3. **Security scanning**: Scan images for vulnerabilities
   ```bash
   docker scan portfolio:latest
   ```
4. **Health checks**: The included docker-compose.yml has health checks enabled
5. **Resource limits**: Set CPU and memory limits in production

## Cleanup

```bash
# Remove stopped containers
docker container prune

# Remove unused images
docker image prune

# Remove everything (containers, images, networks, volumes)
docker system prune --all

# Remove a specific image
docker rmi yourusername/portfolio:latest
```

## Further Reading

- [Docker Documentation](https://docs.docker.com/)
- [Docker Best Practices](https://docs.docker.com/develop/dev-best-practices/)
- [Nginx Documentation](https://nginx.org/en/docs/)
- [Docker Hub](https://hub.docker.com)

## Support

For issues or questions, check the Docker logs:
```bash
docker logs portfolio
```

Or run with verbose logging:
```bash
docker run -e DEBUG=true portfolio:latest
```
