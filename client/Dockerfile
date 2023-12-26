FROM node:18-alpine
WORKDIR /client
COPY package.json .
RUN npm install
COPY . .
CMD ["npm", "start"]
EXPOSE 3000