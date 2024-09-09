FROM node:16.13.1-alpine

WORKDIR /usr/src/frontend

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]