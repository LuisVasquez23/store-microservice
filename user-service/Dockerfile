FROM --platform=linux/arm64 node:18-alpine

# Instalar dependencias necesarias para compilar módulos nativos
RUN apk add --no-cache make gcc g++ python3

WORKDIR /app

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3001
CMD ["node", "src/index.js"]
