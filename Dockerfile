# Step 1: Use Node.js as the base image
FROM node:16-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Step 4: Install project dependencies (including Ant Design, ECharts, and Vis.js)
RUN npm install

# Step 5: Copy the rest of the application code into the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Install a static file server to serve the build files
RUN npm install -g serve

# Expose the port for the app
EXPOSE 3000

# Step 8: Command to run the app
CMD ["serve", "-s", "build", "-l", "3000"]
