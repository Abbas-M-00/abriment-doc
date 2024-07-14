# Use an official Node runtime as a parent image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the Docusaurus site
RUN npm run build

# Expose port 3000 (adjust if your Docusaurus project uses a different port)
EXPOSE 3000

# Command to run Docusaurus server when the container starts
CMD ["npm", "run", "start"]
