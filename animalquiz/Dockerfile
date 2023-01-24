# Use Node.js as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port the server will run on
EXPOSE 8080

# Start the server
CMD [ "npm", "start" ]