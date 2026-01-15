import exprees from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import cors from 'cors'
import helmet from "helmet"
import morgan from "morgan"
import dashboardRoute from "./routes/dashboardRoute"
import productRoute from "./routes/productRoute"
import userRoute from "./routes/userRoute" 
import expenseRoute from "./routes/expensebycategoryRoute" 

dotenv.config()
const app=exprees()
app.use(exprees.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:'cross-origin'}))
app.use(morgan("common"))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(cors())



const port =Number(process.env.PORT) || 3001

app.use("/dashboard",dashboardRoute)
app.use("/products",productRoute)
app.use("/users",userRoute)
app.use("/expenses",expenseRoute)

app.listen(port,"0.0.0.0",()=>{
    console.log(`server is running at port ${port}`)
})