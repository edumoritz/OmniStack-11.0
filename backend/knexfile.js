// Update with your config settings.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './src/database/db.sqlite'
  //   },
  //   migrations: {
  //     directory: './src/database/migrations'
  //   },
  //   useNullAsDefault: true,
  // },
  development: {
    client: 'pg',
    connection: {
      database: 'db_omnistack',
      user:     'postgres',
      password: 'postgres'
    },
    migrations: {
      directory: './src/database/migrationspg'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + '/src/database/migrationspg'
    }
  }

};
