const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const port = 3003;

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Xpert V2 API',
      version: '1.0.0',
      description: 'Xpert api for all requests associated with the Xtreem loggers etc'
    },
    servers: [
      // {
      //   url: 'https://swapi.dev/api/'
      // },
      {
        url: 'https://lj0tvmbnwe.execute-api.ap-southeast-2.amazonaws.com/dev/'
      },
      {
        url: 'https://lj0tvmbnwe.execute-api.ap-southeast-2.amazonaws.com/prod/'
      }
    ]
  },
  //apis: ['./routes/*.js'] // Specify files containing Swagger documentation
  apis: ['swagger.yaml','paths/*','schema/*'] // Specify files containing Swagger documentation
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Define API routes (example)
// app.get('/users', (req, res) => {
//   res.json({
//     users: [
//       { id: 1, name: 'Alice' },
//       { id: 2, name: 'Bob' }
//     ]
//   });
// });

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});