FROM node:20

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN apt-get update && apt-get install -y build-essential python3

EXPOSE 5000

CMD ["npx", "nodemon", "index.js"]
