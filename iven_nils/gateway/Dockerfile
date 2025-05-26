FROM node:18-alpine

WORKDIR /app

# nur package.json und lockfile kopieren, um Layers zu cachen
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 4000
CMD ["node", "index.js"]
