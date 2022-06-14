import { DataSource } from 'typeorm'
import { Tenant } from './entities/Tenant'

const {
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB_NAME
} = process.env

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: POSTGRES_HOST ?? 'localhost',
  port: Number(POSTGRES_PORT) ?? 5432,
  username: POSTGRES_USER ?? 'user',
  password: POSTGRES_PASSWORD ?? 'password',
  database: POSTGRES_DB_NAME ?? 'database',
  entities: [Tenant],
  logging: true,
  synchronize: true
})
