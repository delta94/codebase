ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG APP_NAME

FROM docker.pkg.github.com/neonlaw/codebase/base:latest AS build

ARG DOMAIN_NAME
ARG GATSBY_ACTIVE_ENV
ARG APP_NAME

WORKDIR /app

COPY package.json .
COPY yarn.lock .
RUN yarn install --silent --ignore-optional --no-cache --frozen-lockfile

COPY ./web ./web

WORKDIR /app/web

RUN yarn --no-cache

RUN mv ./.env.staging ./.env.production
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
