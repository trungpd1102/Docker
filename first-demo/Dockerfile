FROM node:14.16.1

# App directory
WORKDIR /app

# Copy package.json and package-lock.json to current working directory
COPY package*.json /app

RUN npm install

# Copy all code to the current working directory
COPY . /app

# Use port in Docker
EXPOSE 8080

# run command
CMD ["node", "index.js"]
