import { ErrorCode, HttpException } from "./errorException";

export class NotFoundException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 409, null);
  }
}
