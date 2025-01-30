FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package.json .
COPY tsconfig.json .

# Copy source code
COPY src/ ./src/

# Install dependencies
RUN npm install

# Build the application
RUN npm run build

# Remove development dependencies
RUN npm prune --production

EXPOSE 8080

ENV PORT=8080
CMD ["node", "dist/main.js"]