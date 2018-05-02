FROM node:10

WORKDIR /app

ADD . /app

CMD node app.js
