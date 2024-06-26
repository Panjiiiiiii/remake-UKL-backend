import { log } from "console";
import  express  from "express";
import { PORT } from "../secret";

const app = express()

app.get('/', (req,res) => {
    res.send('App working')
})

app.listen(PORT, () => {
    console.log("App working");
})