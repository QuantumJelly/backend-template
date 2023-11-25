// app.ts
import express from 'express';
import dotenv from 'dotenv';
import rateLimit from 'express-rate-limit';
import { setupMongoDB } from './database/mongodb';
import { initModels } from './models';
// import { setupRabbitMQ } from './messageQueue/rabbitmq';
import { setupRedis } from './database/redis';
import { setupRoutes } from './routes';
import { loggerMiddleware } from './middleware/logger';
import { errorHandlerMiddleware } from './middleware/errorHandler';
import { authMiddleware } from './middleware/auth';
import { csrfMiddleware } from './middleware/csrf';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to MongoDB
// setupMongoDB(process.env.MONGODB_URI);

// // Connect to MySQL
// setupMySQL({
//   host: process.env.MYSQL_HOST,
//   user: process.env.MYSQL_USER,
//   password: process.env.MYSQL_PASSWORD,
//   database: process.env.MYSQL_DATABASE
// });

// // Connect to RabbitMQ
// setupRabbitMQ(process.env.RABBITMQ_URL);

// Connect to Redis
setupRedis();

// initModels();

// Enable parsing of cookies
// app.use(cookieParser());

// Setup routes
setupRoutes(app);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

app.use(limiter);

app.use(loggerMiddleware);

// app.use(authMiddleware);

app.use(errorHandlerMiddleware);

// app.use(csrfMiddleware);

// Error handling middleware
// app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
//   console.error(err.stack);
//   res.status(500).send('Something went wrong!');
// });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
