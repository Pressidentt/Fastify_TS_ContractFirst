## 2 web servers communication via HTTP (Fastify + TS)
**Contract first using Swagger**

In order to run:
1. npx tsc --watch
2. node dist/serverA/index.js
3. node dist/serverB/index.js
Server A: http://localhost:3001/ping
Server B: http://localhost:3002/ping