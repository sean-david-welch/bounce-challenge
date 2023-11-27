import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
      description: 'Express API with Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8080/api',
      },
    ],
    paths: {
      '/users': {
        get: {
          summary: 'List users',
          responses: {
            '200': {
              description: 'A list of users',
            },
          },
        },
      },
    },
  },
  apis: ['src/router/*.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);
