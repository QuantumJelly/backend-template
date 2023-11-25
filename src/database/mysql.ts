import { Sequelize } from 'sequelize';

// Load environment variables from .env file
require('dotenv').config();

// Replace 'your-mysql-database', 'your-mysql-username', and 'your-mysql-password' with your actual MySQL credentials
const sequelize = new Sequelize(
  '',
  '',
  process.env.MYSQL_PASSWORD,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
    logging: false, // Set to true to log SQL queries
  });

export { sequelize };
