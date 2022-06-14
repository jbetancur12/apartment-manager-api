import 'reflect-metadata'
import app from './app'
import { AppDataSource } from './db'

const port = 3000

async function main (): Promise<void> {
  try {
    await AppDataSource.initialize()
    app.listen(3000, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`)
    })
  } catch (error) {
    console.error(error)
  }
}

void main()
