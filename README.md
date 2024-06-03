1. echo github_token | docker login ghrc.io -u azizjon-aliev --password-stdin

2. docker build . -t ghcr.io/azizjon-aliev/blog-platform.clients.web-ui:latest

3. docker push ghcr.io/azizjon-aliev/blog-platform.clients.web-ui:latest
