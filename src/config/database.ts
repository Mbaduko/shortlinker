export const validateDatabaseConfig = (): void => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
  }

  const isValidPostgres = 
    process.env.DATABASE_URL.startsWith('postgresql://') || 
    process.env.DATABASE_URL.startsWith('postgres://');

  if (!isValidPostgres) {
    throw new Error('DATABASE_URL must be a valid PostgreSQL connection string');
  }
};
