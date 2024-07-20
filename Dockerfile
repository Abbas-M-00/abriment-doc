FROM node:18-alpine3.20

RUN apk add --no-cache autoconf automake g++ make

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
