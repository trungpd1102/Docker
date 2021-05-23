FROM node:14.16.1

# App directory
WORKDIR /app

# Copy package.json and package-lock.json to current working directory
COPY ./src/package*.json /app/src/

RUN echo 'Hello Docker'

RUN npm install

# Copy all code to the current working directory
COPY . .

# Use port in Docker
EXPOSE 8080

# run command
CMD ["node", "index.js"]
