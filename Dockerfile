# Simple Dockerfile to serve the trivia game as a static website
# based on nginx-alpine for a small footprint.

FROM nginx:alpine

# Remove the default nginx content
RUN rm -rf /usr/share/nginx/html/*

# Copy the entire project into nginx web root
# (the Docker context should be the repository root)
COPY . /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Use the default nginx entrypoint which will serve the files
CMD ["nginx", "-g", "daemon off;"]
