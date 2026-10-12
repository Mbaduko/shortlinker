import dotenv from 'dotenv';
import { createApp } from './app';
import { validateDatabaseConfig } from './config/database';
import { connectDatabase, disconnectDatabase } from './database/connection';

dotenv.config();

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    validateDatabaseConfig();
    
    console.log('Connecting to database...');
    await connectDatabase();
    console.log('Database connected');

    const app = createApp();
    const server = app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
      console.log(`API docs at http://localhost:${PORT}/api-docs`);
    });

    const shutdown = async (signal: string) => {
      console.log(`${signal} received, shutting down...`);
      server.close(async () => {
        await disconnectDatabase();
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error('STARTUP FAILED:', error instanceof Error ? error.message : error);
    process.exit(1);
  }
};

startServer();
