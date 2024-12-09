import {FastifyPluginCallback, FastifySchema} from "fastify";
import prisma from "../config/prisma";
import {IIdParams, ISuccess} from "./types/jeneric.types";
import {IUserBody, IUserReply} from "./types/user.types";
import {UserBodySchema, UserResponseSchema} from "./schemas/user.schemas";
import {IdParamsSchema, SuccessResponseSchema} from "./schemas/generic.schemas";




export const UserController: FastifyPluginCallback = (server, undefined, done) => {

  server.get<{
    Params: IIdParams,
    Reply: IUserReply | null
  }>('/:id', {schema:{...IdParamsSchema, ...UserResponseSchema}}, async (request, reply) => {
    const user = await prisma.user.findUnique({
      where: {
        id: request.params.id
      }
    })
    if (!user) throw new Error('user not found!')
    reply.code(200).send(user)
  })


  server.post<{
    Body: IUserBody,
    Reply: IUserReply | null
  }>('', {schema:{...UserBodySchema, ...UserResponseSchema}}, async (request, reply) => {
    const user = await prisma.user.create({
      data: request.body.user
    });

    reply.code(200).send(user)
  })

  server.post<{
    Body: IUserBody,
    Reply: IUserReply | null
  }>('/login', {schema:{...UserBodySchema, ...UserResponseSchema}}, async (request, reply) => {
    const user = await prisma.user.create({
      data: request.body.user
    });

    reply.code(200).send(user)
  })


  server.put<{
    Params: IIdParams,
    Body: IUserBody,
    Reply: ISuccess | null
  }>('/:id', {schema:{...IdParamsSchema, ...UserBodySchema, ...SuccessResponseSchema}}, async (request, reply) => {
    const id = request.params.id;
    const user = await prisma.user.update({
      where: {
        id: id
      },
      data: request.body.user
    });

    reply.code(200).send({message: "success"})
  })

  server.delete<{
    Params: IIdParams,
    Reply: ISuccess | null
  }>('/:id', {schema:{...IdParamsSchema, ...SuccessResponseSchema}}, async (request, reply) => {
    const id = request.params.id;
    const user = await prisma.user.delete({
      where: {
        id: id
      }
    });

    reply.code(200).send({message: "success"})
  })

  done();
}