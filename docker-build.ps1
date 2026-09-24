# Docker Build Script for Windows PowerShell
# Usage: .\docker-build.ps1 -Username "your-username" -Push -Run

param(
    [string]$Username,
    [string]$Version = "latest",
    [switch]$Push,
    [switch]$Run,
    [switch]$Help
)

# Color output functions
function Write-Info {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Cyan
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

function Show-Usage {
    Write-Host @"
Usage: .\docker-build.ps1 [OPTIONS]

Options:
  -Username USERNAME     Docker Hub username (required for push)
  -Version VERSION       Image version tag (default: latest)
  -Push                  Push image to Docker Hub after build
  -Run                   Run container locally after build
  -Help                  Show this help message

Examples:
  .\docker-build.ps1 -Username myusername -Push
  .\docker-build.ps1 -Username myusername -Version v1.0 -Push -Run
  .\docker-build.ps1 -Run
"@
}

# Show help if requested
if ($Help) {
    Show-Usage
    exit 0
}

# Validate inputs
if ($Push -and [string]::IsNullOrEmpty($Username)) {
    Write-Error "Docker Hub username required for push. Use -Username parameter"
    exit 1
}

$ImageName = "portfolio"
$FullImageName = if ($Username) { "$Username/$ImageName`:$Version" } else { "$ImageName`:$Version" }

Write-Info "Starting Docker build process..."
Write-Host ""

# Build the image
Write-Info "Building image: $FullImageName"
docker build -t $FullImageName .

if ($LASTEXITCODE -ne 0) {
    Write-Error "Docker build failed!"
    exit 1
}

Write-Success "Docker image built successfully!"
Write-Host ""

# Push to Docker Hub if requested
if ($Push) {
    Write-Info "Authenticating with Docker Hub..."
    docker login
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Docker login failed!"
        exit 1
    }
    
    Write-Info "Pushing image to Docker Hub: $FullImageName"
    docker push $FullImageName
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Docker push failed!"
        exit 1
    }
    
    # Also push as latest if version is not latest
    if ($Version -ne "latest") {
        $LatestImage = "$Username/$ImageName`:latest"
        Write-Info "Also tagging and pushing as latest: $LatestImage"
        docker tag $FullImageName $LatestImage
        docker push $LatestImage
    }
    
    Write-Success "Image pushed to Docker Hub successfully!"
    Write-Info "View at: https://hub.docker.com/r/$Username/$ImageName"
    Write-Host ""
}

# Run locally if requested
if ($Run) {
    Write-Info "Starting container locally..."
    $Timestamp = (Get-Date -Format "yyyyMMddHHmmss")
    $ContainerName = "$ImageName-$Timestamp"
    
    docker run -d `
        -p 80:80 `
        --name $ContainerName `
        $FullImageName
    
    if ($LASTEXITCODE -ne 0) {
        Write-Error "Failed to start container!"
        exit 1
    }
    
    Write-Success "Container started successfully!"
    Write-Info "Container name: $ContainerName"
    Write-Info "Access your portfolio at: http://localhost"
    Write-Host ""
    Write-Info "View logs with: docker logs $ContainerName"
    Write-Info "Stop container with: docker stop $ContainerName"
    Write-Host ""
}

Write-Host "All done!" -ForegroundColor Green
