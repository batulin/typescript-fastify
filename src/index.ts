import fastify, { FastifyInstance } from 'fastify';
import config from "./config/config";
import {UserController} from "./controllers/user.controller";

class Application {
  server: FastifyInstance;

  constructor() {
    this.server = fastify();
  }

  async startHttpServer() {
    try {
      const address = await this.server.listen({port: config.port});
      console.log(`Server listening at ${address}`);
    } catch (err) {
      console.log(err);
      process.exit(1);
    }

  }

  registerControllers() {
    this.server.register(UserController, {prefix: `${config.apiPrifix}/user`});
  }
  async main() {
    this.registerControllers();
    await this.startHttpServer();
  }
}

const appInstance = new Application();
appInstance.main();