FROM node:16-alpine

RUN yarn install -g ts-node

WORKDIR /usr/src/app

COPY package*.json 

COPY . .

RUN yarn install

ENV NODE_ENV=production

RUN yarn run m:gen -- src/migrations

RUN yarn run m:run

EXPOSE 8000

CMD ["yarn","start"]