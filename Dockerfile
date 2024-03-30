FROM  node:20-alpine3.18 AS builder
WORKDIR /usr/src

COPY . .

RUN rm -rf build && rm -rf node_modules && npm install && npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
