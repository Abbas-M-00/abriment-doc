FROM node:18-bullseye

RUN apt install --no-cache autoconf automake g++ make

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]
