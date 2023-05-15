FROM node:18.14.0-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:18.14.0-alpine
RUN apk add tzdata && \
cp /usr/share/zoneinfo/America/Bogota /etc/localtime && \
echo "America/Bogota" > /etc/timezone
WORKDIR /app


COPY package.json .
RUN npm install --only=production
COPY --from=build /app/dist ./dist
CMD ["npm","run","start:prod"]