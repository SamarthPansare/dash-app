# Use Node.js base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the development server port
EXPOSE 3000

# Set the default command to run the development server
CMD ["npm", "run", "dev", "--", "--host"]

