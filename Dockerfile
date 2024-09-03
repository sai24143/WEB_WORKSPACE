FROM node:latest
WORKDIR /app
# COPY package*.json ./
ADD . .
RUN npm install
COPY . .
CMD ["npm","start"]


