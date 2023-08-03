import express from "express"
import morgan from "morgan"
import router from "./routes/payment.routes.js"
import { PORT } from "./config.js" 
import path from "path" 

const app = express()

app.use(morgan("dev"))
app.use(express.static(path.resolve("src/public")))
app.use(router)
app.get("/" , (req, res) => res.send("running"))

app.listen(PORT , () => {
    console.log(`listening in port ${PORT}`)
})