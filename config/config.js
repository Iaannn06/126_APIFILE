require('dotenv').config();

const development = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_development',
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};

const test = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_development',
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};

const production = {
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || null,
  database: process.env.DB_NAME || 'database_development',
  host: process.env.DB_HOST ,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
};

module.exports = {
  development,
  test,
  production,
};

//      {
//       "development": {
//          "username": "root",
//          "password": null,
//          "database": "database_development",
//         "host": "127.0.0.1",
//         "dialect": "mysql"
//        },
//        "test": {
//          "username": "root",
//          "password": null,
//          "database": "database_test",
//         "host": "127.0.0.1",
 //         "dialect": "mysql"
  //      },
    //    "production": {
      //    "username": "root",
        //  "password": null,
          //"database": "database_production",
       //   "host": "127.0.0.1",
       //   "dialect": "mysql"
     //   }
   //   }