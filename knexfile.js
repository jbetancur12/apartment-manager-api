module.exports = {

  client: 'postgresql',
  connection: `postgresql://developer:jorge@localhost:5432/api`,
  migrations: {
    directory: __dirname + "/migrations"
  },
  useNullAsDefault: true,
  seeds: {
    directory: __dirname + '/seeds'
  }
}


// require('ts-node').register()
// const parseDbUrl = require('parse-database-url')

// module.exports = require('./src/Config').Knex.config
