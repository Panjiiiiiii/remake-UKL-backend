import  express,{Express}  from "express";
import { PORT } from "./secret";
import {PrismaClient} from '@prisma/client'
import rootRouter from "./routes/router";
import { errorMiddleware } from "./middlewares/errors";
import bodyParser from "body-parser";
import cors from 'cors'

const app:Express = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
    log:[`query`]
})

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log("App working");
})