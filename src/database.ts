import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const config: Knex.Config = {
  client: env.DATABASE_CLIENT,
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

if (env.DATABASE_CLIENT === 'sqlite') {
  config.connection = {
    filename: env.DATABASE_URL,
  }
} else {
  config.connection = env.DATABASE_URL
}

export const knex = setupKnex(config)
