import multer from "multer";
import { diskStorage } from "multer";
import { BadRequestException } from "../errors/bad-request";
import { ErrorCode } from "../errors/errorException";

const storage = diskStorage({
    destination : './src/assets',
    filename : (req,file,cb) => {
        const filename = `${Date.now()}-${file.originalname}`
        cb(null, filename)
    }
})

export const upload = multer({
    storage : storage,
    fileFilter : (req,file,cb) => {
        const acceptedType = [`image/jpg`, `image/jpeg`, `image/png`]
        if(!acceptedType.includes(file.mimetype)) {
            cb(null,false)
            throw new BadRequestException(`Invalide file type ${file.mimetype}`, ErrorCode.ERROR_UPLOAD_PHOTO);
        }
        const fileSize = req.headers[`content-length`] as any
        const maxSize = 1*1024*1024
        if(fileSize > maxSize) {
            cb(null, false)
            throw new BadRequestException(`File too large`, ErrorCode.ERROR_UPLOAD_PHOTO);
        }
        cb(null, true)
    }
})