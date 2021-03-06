FROM node:alpine 
WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.18.0-alpine
COPY /nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=0 /app/build /usr/share/nginx/html
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]