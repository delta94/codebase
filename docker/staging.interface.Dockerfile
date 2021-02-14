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
RUN yarn install --silent --ignore-optional

COPY . .

RUN yarn workspace @neonlaw/web build

RUN awk "{gsub(/DOMAIN_NAME/, \"$DOMAIN_NAME\"); print}" ./docker/staging.nginx.conf > docker.nginx.conf

FROM nginx

ARG APP_NAME

COPY --from=build /app/web/.next /usr/share/nginx/html
COPY --from=build /app/docker.nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
