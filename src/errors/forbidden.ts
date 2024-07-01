import { ErrorCode, HttpException } from "./errorException";

export class forbiddenException extends HttpException {
  constructor(message: string, errorCode: ErrorCode) {
    super(message, errorCode, 403, null);
  }
}
