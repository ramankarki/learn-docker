FROM node:16

EXPOSE 2000

WORKDIR /node

COPY package.json yarn.lock* ./
RUN chown -R node:node .
USER node
RUN yarn install && yarn cache clean --force

COPY --chown=node:node . .

CMD ["node", "index.js"]