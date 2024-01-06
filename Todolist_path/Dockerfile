# Use the official Node.js image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json separately to leverage Docker caching
COPY package*.json ./

# Install any needed packages specified in package.json
RUN npm install --no-package-lock

# Copy the current directory contents into the container at /app
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run your app
CMD ["npm", "start"]
