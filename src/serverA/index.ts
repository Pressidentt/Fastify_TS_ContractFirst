import fastify from "fastify";
import { swaggerOptions, swaggerUI } from "../serverA/swagger"

const serverA = fastify();

const serverBurl = "localhost:3002"

serverA.register(require("@fastify/swagger"), swaggerOptions)
serverA.register(require("@fastify/swagger-ui"), swaggerUI)

serverA.register((serverA, options, done) => {
  serverA.get("/ping", {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            message: { type: 'string' },
          },
        },
      },
    },
    handler:
      async (_request, reply) => {
        try {
          const response = await fetch(`${serverBurl}/ping`)
          const data = await response.json()
          return { message: data }
        }
        catch (e) {
          console.error(e)
        }
      }
  })
  done()
});

const start = async () => {
  try {
    await serverA.listen(3001);
    console.log("Server A is listening on port 3001");
  } catch (err) {
    console.error("Error starting Server A", err);
  }
};

start();
