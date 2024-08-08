# Usa una imagen base de Node.js
FROM node:18-alpine

# Configura el directorio de trabajo
WORKDIR /app

# Copia los archivos de tu aplicación al contenedor
COPY package*.json ./
RUN npm install
COPY . .

# Expone el puerto en el que la aplicación escuchará
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["node", "src/index.js"]
