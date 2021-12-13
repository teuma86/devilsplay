FROM node:15.8.0

RUN mkdir -p /app
WORKDIR /app
COPY src/package.json /app
COPY src/yarn.lock /app
RUN yarn install
COPY ./src/. /app
EXPOSE 3000
CMD ["yarn", "dev"]