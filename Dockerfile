FROM node:latest
WORKDIR /apps
# COPY package*.json ./
ADD . .
RUN npm install
# COPY . .
CMD ["npm","start"]


