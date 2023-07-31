export const swaggerOptions = {
  swagger: {
    info: {
      title: "Server A",
      description: "Server A",
      version: "1.0.0",
    },
    host: "localhost",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [{ name: "Default", description: "Default" }],
  },
};

export const swaggerUI = {
  routePrefix: '/docs',
  exposeRoute: true,
}