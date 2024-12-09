import {FastifySchema} from "fastify";


export const UserResponseSchema: FastifySchema = {
  response: {
    201: {
      type: 'object',
      properties: {
        user: {
          type: "object",
          properties: {
            id: {type: "number"},
            email: {type: "string"}
          }
        }
      }
    },
  },
}

export const UserBodySchema: FastifySchema = {
  body: {
    type: 'object',
    required: ['user'],
    properties: {
      user: {
        type: "object",
        properties: {
          id: {type: "number"},
          email: {type: "string"},
          name: {type: "string"},
          password: {type: "string"},
        }
      }
    }
  }
}