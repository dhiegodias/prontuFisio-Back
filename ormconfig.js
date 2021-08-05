module.exports = {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": process.env.DATABASE_USER,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE,
    "synchronize": false,
    "logging": false,
    "entities": [
       "src/models/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ]
 };