import { Injectable, Logger, NestMiddleware } from "@nestjs/common";
import { Request, Response, NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger  = new Logger('reqs')
  use(req: Request, _: Response, next: NextFunction) {
    this.logger.log(`${req.method} - ${req.originalUrl}`)
    next();

  }
}
