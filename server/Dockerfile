FROM node:18-alpine
# RUN apt-get install -y openssl

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

ARG API_DB_URL
ENV DATABASE_URL=$API_DB_URL

EXPOSE 3001

# ENTRYPOINT ["sh", "-c"]


# CMD ["npm start"]
CMD ["npm", "run", "start"]