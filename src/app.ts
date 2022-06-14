import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import tenantRoutes from './routes/tenant.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(tenantRoutes)

export default app
