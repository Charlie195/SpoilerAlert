FROM node:18-alpine
RUN npm install -g nodemon
WORKDIR /server
COPY package*.json ./
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "dev"]
COPY . .