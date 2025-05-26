FROM node:18
WORKDIR /app
COPY . .
RUN npm install express http-proxy-middleware
CMD ["node", "gateway.js"]