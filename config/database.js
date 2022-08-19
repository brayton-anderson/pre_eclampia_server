const path = require('path');
const parse = require('pg-connection-string').parse;

module.exports = ({ env }) => {

   if(env('NODE_ENV') === 'production'){
     const config = parse(process.env.DATABASE_URL)
     return {
        connection: {
          client: 'postgres',
          connection: {
            host: config.host,
            port: config.port,
            database: config.database,
            user: config.user,
            password: config.password,
            ssl: {
              rejectUnauthorized: false
            },
          },
          debug: false,
        },
     }
   }
    
    return{
      connection: {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      },
    }
};
