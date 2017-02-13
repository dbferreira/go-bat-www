FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install app dependencies
COPY ./package.json /usr/src/app/
RUN npm install && npm install -g @angular/cli

CMD [ "npm", "start" ]
# CMD ["sleep", "1000000"]
