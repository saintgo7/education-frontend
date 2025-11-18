FROM node:18-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm @angular/cli && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build --configuration production

FROM nginx:alpine
COPY --from=build /app/dist/angular-enterprise /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
