
FROM node:16

WORKDIR /app

COPY package.json .

RUN yarn

COPY .  .

CMD yarn dev



# FROM node:16   AS console-builder

# WORKDIR /app

# COPY package.json .

# RUN yarn

# COPY .   .

# RUN  yarn build

# FROM alpine:3.13.2 AS builder

# RUN apk add thttpd

# RUN adduser -D static

# WORKDIR /home/static

# COPY --from=console-builder  /app/dist/  .

# USER static

# RUN thttpd

# CMD ["thttpd", "-D", "-h", "0.0.0.0", "-p", "5173", "-d", "/home/static", "-u", "static", "-l", "-", "-M", "60"]




