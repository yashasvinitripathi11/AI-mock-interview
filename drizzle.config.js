/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:GuUcRos35akM@ep-hidden-morning-a5mq6rne.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require' ,
    }
  };