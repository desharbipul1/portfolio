#!/bin/bash

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default values
IMAGE_NAME="portfolio"
REGISTRY=""
VERSION="latest"
PUSH=false
RUN_LOCAL=false

# Function to print colored output
print_info() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Function to show usage
show_usage() {
    echo "Usage: ./docker-build.sh [OPTIONS]"
    echo ""
    echo "Options:"
    echo "  -u, --username USERNAME    Docker Hub username (required for push)"
    echo "  -v, --version VERSION      Image version tag (default: latest)"
    echo "  -p, --push                 Push image to Docker Hub after build"
    echo "  -r, --run                  Run container locally after build"
    echo "  -h, --help                 Show this help message"
    echo ""
    echo "Examples:"
    echo "  ./docker-build.sh --username myusername --push"
    echo "  ./docker-build.sh --username myusername --version v1.0 --push --run"
    echo "  ./docker-build.sh --run"
}

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -u|--username)
            REGISTRY="$2"
            shift 2
            ;;
        -v|--version)
            VERSION="$2"
            shift 2
            ;;
        -p|--push)
            PUSH=true
            shift
            ;;
        -r|--run)
            RUN_LOCAL=true
            shift
            ;;
        -h|--help)
            show_usage
            exit 0
            ;;
        *)
            print_error "Unknown option: $1"
            show_usage
            exit 1
            ;;
    esac
done

# Validate inputs
if [ "$PUSH" = true ] && [ -z "$REGISTRY" ]; then
    print_error "Docker Hub username required for push. Use -u or --username"
    exit 1
fi

print_info "Starting Docker build process..."
echo ""

# Build the image
FULL_IMAGE_NAME="${IMAGE_NAME}:${VERSION}"
if [ -n "$REGISTRY" ]; then
    FULL_IMAGE_NAME="${REGISTRY}/${IMAGE_NAME}:${VERSION}"
fi

print_info "Building image: $FULL_IMAGE_NAME"
docker build -t "$FULL_IMAGE_NAME" .

if [ $? -ne 0 ]; then
    print_error "Docker build failed!"
    exit 1
fi

print_success "Docker image built successfully!"
echo ""

# Push to Docker Hub if requested
if [ "$PUSH" = true ]; then
    print_info "Authenticating with Docker Hub..."
    docker login
    
    if [ $? -ne 0 ]; then
        print_error "Docker login failed!"
        exit 1
    fi
    
    print_info "Pushing image to Docker Hub: $FULL_IMAGE_NAME"
    docker push "$FULL_IMAGE_NAME"
    
    if [ $? -ne 0 ]; then
        print_error "Docker push failed!"
        exit 1
    fi
    
    # Also push as latest if version is not latest
    if [ "$VERSION" != "latest" ]; then
        LATEST_IMAGE="${REGISTRY}/${IMAGE_NAME}:latest"
        print_info "Also tagging and pushing as latest: $LATEST_IMAGE"
        docker tag "$FULL_IMAGE_NAME" "$LATEST_IMAGE"
        docker push "$LATEST_IMAGE"
    fi
    
    print_success "Image pushed to Docker Hub successfully!"
    print_info "View at: https://hub.docker.com/r/${REGISTRY}/${IMAGE_NAME}"
    echo ""
fi

# Run locally if requested
if [ "$RUN_LOCAL" = true ]; then
    print_info "Starting container locally..."
    CONTAINER_NAME="${IMAGE_NAME}-$(date +%s)"
    
    docker run -d \
        -p 80:80 \
        --name "$CONTAINER_NAME" \
        "$FULL_IMAGE_NAME"
    
    if [ $? -ne 0 ]; then
        print_error "Failed to start container!"
        exit 1
    fi
    
    print_success "Container started successfully!"
    print_info "Container name: $CONTAINER_NAME"
    print_info "Access your portfolio at: http://localhost"
    echo ""
    print_info "View logs with: docker logs $CONTAINER_NAME"
    print_info "Stop container with: docker stop $CONTAINER_NAME"
    echo ""
fi

echo -e "${GREEN}All done!${NC}"
