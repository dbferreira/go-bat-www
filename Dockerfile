FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/
RUN npm install -g @angular/cli
RUN npm install

EXPOSE 4200
CMD [ "npm", "start" ]
# CMD ["sleep", "1000000"] 