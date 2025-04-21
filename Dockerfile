FROM node:23.2.0-alpine3.19 AS ui-build

# Get the arguments from the command line
ARG NG_APP_API_URL

# Set the environment variables
ENV NG_APP_API_URL=$NG_APP_API_URL

WORKDIR /app
COPY package*.json /app/
RUN npm ci
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=ui-build /app/dist/task-app/browser /usr/share/nginx/html
EXPOSE 4200
CMD ["nginx", "-g", "daemon off;"]
