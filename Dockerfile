ARG NODE_VERSION=18

FROM node:${NODE_VERSION}

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package*.json ./

ENV NODE_ENV=production

RUN npm install -g serve
RUN npm install

COPY . ./

RUN npm run build

EXPOSE 80

CMD serve -s dist -l 80