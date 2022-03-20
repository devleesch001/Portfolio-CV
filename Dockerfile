FROM node:16

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

ENV NODE_ENV=production

RUN npm ci --only=production
RUN npm install -g serve

COPY . ./

CMD serve -s build -l 80