FROM node:20-alpine

WORKDIR /app

COPY  package*.json ./

# only needed in dev?
RUN npm install -g @angular/cli@15.2.9

RUN npm install

COPY . .
EXPOSE 4200
#CMD npm start
#CMD ng serve --host 0.0.0.0 --port 4200