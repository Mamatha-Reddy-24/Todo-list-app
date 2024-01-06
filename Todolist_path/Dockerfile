# Use the official Node.js image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files into the container at /app
COPY package*.json ./

# Install production dependencies
RUN npm install --production

# Copy the rest of the application files into the container at /app
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run your app
CMD ["npm", "start"]
