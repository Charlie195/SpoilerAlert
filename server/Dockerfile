FROM node:14
WORKDIR /app
COPY package*.json ./
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your app is running
EXPOSE 3001

# Command to run your application
CMD ["node", "your-backend-file.js"]