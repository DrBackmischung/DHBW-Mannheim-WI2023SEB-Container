FROM node:18
WORKDIR /mika_okan
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
