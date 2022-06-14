import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import * as dotenv from 'dotenv'
import tenantRoutes from './routes/tenant.routes'

dotenv.config()
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(tenantRoutes)

export default app
