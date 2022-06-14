import { DataSource } from 'typeorm'
import { Tenant } from './entities/Tenant'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'developer',
  password: 'jorge',
  database: 'api',
  entities: [Tenant],
  logging: true,
  synchronize: true
})
