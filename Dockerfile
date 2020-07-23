FROM node:12-buster-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json .
RUN yarn

COPY ./ .

CMD ["yarn","start"]