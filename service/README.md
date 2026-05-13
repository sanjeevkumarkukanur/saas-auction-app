# Install NestJS CLI
npm i -g @nestjs/cli

# Create monorepo
nest new my-platform
cd my-platform

# Convert to monorepo and add apps
nest generate app api-gateway
nest generate app auth-service
nest generate app tenant-service
nest generate app team-service
nest generate app player-service
nest generate app game-service

# Create shared library
nest generate library common
nest generate library redis
