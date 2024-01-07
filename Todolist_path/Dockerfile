# Use the official Node.js image
FROM node:latest

# Set the working directory to /app
WORKDIR /app

# Copy only package.json to avoid copying unnecessary files
COPY package.json .
COPY index.js .


# Copy the current directory contents into the container at /app
#COPY . .

# Make port 80 available to the world outside this container
EXPOSE 80

# Define the command to run your app
CMD ["npm", "start"]
