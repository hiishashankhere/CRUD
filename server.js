import express from 'express';
import { connect } from './data/database.js';
import taskRouter from './routes/task.js';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config({
  path: './config/config.env'
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database
connect();

// Health check routes
const health = (req, res) => {
  return res.status(200).json({
    message: "Algo Trade Backend Is Running!",
  });
};

// Register health check routes
app.get('/', health);
app.get('/health', health);

// Register API routes
app.use("/api/v1", taskRouter);

// Wildcard route (should be registered last)
const badGateway = (req, res) => {
  return res.status(502).json({ status: 502, message: "CRUD API Bad Gateway!" });
};

app.use('*', badGateway);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server started running on port", PORT);
});
