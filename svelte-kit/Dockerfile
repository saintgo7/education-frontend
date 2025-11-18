FROM node:18-alpine AS build
WORKDIR /app
COPY package.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

FROM node:18-alpine
WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/package.json ./
RUN npm install -g pnpm && pnpm install --prod --frozen-lockfile
EXPOSE 3000
ENV PORT=3000
CMD ["node", "build"]
