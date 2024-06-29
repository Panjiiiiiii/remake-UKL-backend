import  express,{Express}  from "express";
import { PORT } from "./secret";
import {PrismaClient} from '@prisma/client'
import rootRouter from "./routes/router";
import { errorMiddleware } from "./middlewares/errors";

const app:Express = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api', rootRouter)

export const prismaClient = new PrismaClient({
    log:[`query`]
})

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log("App working");
})