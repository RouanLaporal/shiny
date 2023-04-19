FROM node:18-alpine3.17

ADD . /app/

WORKDIR /app

COPY package*.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]