export const config = {
    app: {
        port: process.env.PORT || 3000,
        env: process.env.NODE_ENV || 'development',
    },
    db: {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 5432,
        username: process.env.DB_USERNAME || 'user',
        password: process.env.DB_PASSWORD || 'password',
        database: process.env.DB_NAME || 'dbname',
    },
    externalServices: {
        serviceA: {
            url: process.env.SERVICE_A_URL || 'http://localhost:4000',
        },
        serviceB: {
            url: process.env.SERVICE_B_URL || 'http://localhost:5000',
        },
    },
};