import {FastifySchema} from "fastify";


export const SuccessResponseSchema: FastifySchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        message: {type: "string"}
      }
    },
  },
}

export const IdParamsSchema: FastifySchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'number' }
    }
  }
}