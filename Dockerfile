# Use the official Node.js image as the base  
FROM node:16-alpine

# Set the working directory inside the container  
WORKDIR /app

# Copy package.json and package-lock.json to the container  
COPY package*.json ./

# Install dependencies  
RUN npm install

# Copy the app source code to the container  
COPY . .

# Build the Next.js app  
RUN npm run build

# Start the app  
CMD ["npx", "serve", "-s", "buid", "-t", "3000"]