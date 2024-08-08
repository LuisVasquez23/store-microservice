FROM node:18-alpine

WORKDIR /app

# Instalar herramientas de compilación y MySQL Client
RUN apk add --no-cache make gcc g++ python3 mysql-client

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3001
CMD ["node", "src/index.js"]
