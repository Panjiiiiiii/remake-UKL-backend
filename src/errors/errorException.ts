export class HttpException extends Error {
    message: string;
    errorCode: any;
    statusCode: number;
    errors: ErrorCode;

    constructor(message:string, errorCode: ErrorCode, statusCode:number, error: any) {
        super(message)
        this.message = message
        this.errorCode = errorCode
        this.statusCode = statusCode
        this.errors = error
    }
}

export enum ErrorCode {
    USER_NOT_FOUND = 1000,
    INTERNAL_ERROR = 1001,
    UNAUTHORIZED = 1002,
    UNPROCESSABLE_ENTITY = 1003,
    USER_ALREADY_EXISTS = 1004,
    INCORRECT_PASSWORD = 1005,
    FORBIDDEN = 1006,
    ERROR_UPLOAD_PHOTO = 1007
}