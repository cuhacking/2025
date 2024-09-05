import type { NextFunction, Request, Response } from 'express'
import type { HttpException } from '../exceptions/exception'
import { APP_ERROR_MESSAGE } from '../constants/constant'

function errorMiddleware(error: HttpException, request: Request, response: Response, _next: NextFunction) {
  const status = error.status ? error.status : 500
  const message = status === 500 ? APP_ERROR_MESSAGE.serverError : error.message
  const errors = error.error
  response.status(status).send({ status, message, error: errors })
}

export default errorMiddleware
