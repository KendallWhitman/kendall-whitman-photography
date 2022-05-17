FROM node:16.15.0
WORKDIR portfolio
COPY . .
RUN npm i
RUN npm run build
EXPOSE 8005
CMD npm run serve
