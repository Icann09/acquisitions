import 'dotenv/config';

export default {
  schema: './src/models/*.js',
  out: './srizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  }
}; 
