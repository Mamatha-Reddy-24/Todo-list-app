FROM node:latest
WORKDIR /app
COPY app/package.json .
RUN npm install
COPY . .

EXPOSE 80

CMD ["npm", "start"]
