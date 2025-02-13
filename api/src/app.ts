import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';

const envPath = path.resolve(
  __dirname,
  process.env.NODE_ENV === 'production' ? '../.env.production' : '../.env'
);

dotenv.config({ path: envPath });

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(cors());
app.use(express.json());

// Development/production check
const isProduction = process.env.NODE_ENV === 'production';

// Serve frontend in production
if (isProduction) {
  app.use(express.static(path.join(__dirname, '../../web/dist')));
}

// Example API route
app.get('/api/hello', (req: Request, res: Response) => {
  res.json({ message: 'Hello from /api/hello!' });
});

// Handle client routing in production
if (isProduction) {
  app.get('*', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../../web/dist/index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`> Server running on http://localhost:${PORT}`);
  console.log(`> Environment: ${process.env.NODE_ENV}`);
});
