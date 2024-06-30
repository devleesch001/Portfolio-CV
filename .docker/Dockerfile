ARG NODE_VERSION=18

FROM node:${NODE_VERSION} as portfolio-cv-base

WORKDIR /usr/src/app
ENV PATH /usr/src/app/node_modules/.bin:$PATH

RUN npm install -g serve

COPY ../package.json ./

RUN npm install

COPY .. ./


FROM portfolio-cv-base as portfolio-cv-prod

ENV NODE_ENV=production

RUN npm run build

EXPOSE 80

CMD serve -s dist -l 80

FROM portfolio-cv-base as portfolio-cv-dev

ENV NODE_ENV=development

EXPOSE 5173

CMD vite --host
