import fastify from "fastify";
import { swaggerOptions, swaggerUI } from "../serverB/swagger"

const serverB = fastify();

const serverAurl = "localhost:3001"

serverB.register(require("@fastify/swagger"), swaggerOptions)
serverB.register(require("@fastify/swagger-ui"), swaggerUI)

serverB.register((serverA, options, done) => {
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
          const response = await fetch(`${serverAurl}/ping`)
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
    await serverB.listen(3001);
    console.log("Server A is listening on port 3001");
  } catch (err) {
    console.error("Error starting Server A", err);
  }
};

start();
