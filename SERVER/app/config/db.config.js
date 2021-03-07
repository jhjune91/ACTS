module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "8758",
    DB: "ACTS",
    PORT : 25000,
    dialect: "postgres",
    pool: { // sequelize connection pool configuration
        max: 5, // maximum number of connection pool
        min: 0, // minimum number of connectino pool
        acquire: 30000, // maximun time, in ms, that pool will try to get connection before throwing error
        idle: 10000 // maximum time, in ms, that a connection can be idle before being released
    }
};