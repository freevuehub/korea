FROM node:latest

RUN mkdir -p /app

WORKDIR /app

ADD . /app

RUN yarn
RUN yarn build

ENV HOST 0.0.0.0
ENV TZ=Asia/Seoul

EXPOSE 3000

CMD ["yarn", "start"]
