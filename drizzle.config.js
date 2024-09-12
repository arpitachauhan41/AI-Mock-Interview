/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://db_owner:2JCwxldVrUK5@ep-solitary-cherry-a1bxarap.ap-southeast-1.aws.neon.tech/db?sslmode=require',
    }
  };