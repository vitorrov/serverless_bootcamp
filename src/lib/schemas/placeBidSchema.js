const schema = {
  type: 'object',
  properties: {
    pathParameters: {
      type: 'object',
      properties: {
        id: {
          type: 'string',
        }
      },
    },
    body: {
      type: 'object',
      properties: {
        amount: {
          type: 'string',
        }
      },
      required: ['amount'],
    }
  },
  required: [
    'pathParameters',
    'body',
  ],
};

export default schema;