const cookieSecret = "Sup3rDup3rS3cr3t";
const jwtSecret = "S3cr3t3stS3cr3t";
const cookieNames = {
    auth: "auth-cookie",
    message: "message"
}
const clientMessages = {
    
}
const dbName = "honey-king";

const env = process.env.NODE_ENV || "development";

const envConfig = {
    development: {
        port: process.env.PORT || 9000,
        dbURL: `mongodb://localhost:27017/${dbName}`
    },
    production: {}
};

module.exports = {
    envConfig: envConfig[env],
    cookieSecret,
    jwtSecret,
    cookieNames,
    clientMessages
}