import { ErrorCode, HttpException } from "./errorException";

export class BadRequestException extends HttpException {
    constructor(message: string, errorCode:ErrorCode, errors?:any){
        super(message, errorCode, 409, errors)
    }
}