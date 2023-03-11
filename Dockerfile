FROM node:lts-alpine3.17

RUN addgroup -S appgroup \
 && adduser -S appuser -G appgroup \
 && mkdir -p /app \
 && chown -R appuser:appgroup /app

WORKDIR /app
USER appuser

COPY src /app/src
COPY package*json /app/
RUN npm ci --omit=dev

EXPOSE 8000
CMD [ "node", "." ]
