FROM node:16-alpine
RUN npm install -g npm@8.0.0 && \
  npm install -g pm2
CMD [ "pm2-runtime", "auth-gateway.js" ]
