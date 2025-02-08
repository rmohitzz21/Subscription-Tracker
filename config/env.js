import { config } from 'dotenv';

// Load the correct .env file based on the environment (development or production)
const result = config({
  path: `.env.${process.env.NODE_ENV || 'development'}.local`,
});

// Check if loading the `.env` file was successful
if (result.error) {
  throw new Error(`Unable to load environment variables: ${result.error}`);
}

// Export necessary environment variables
export const { PORT, NODE_ENV } = process.env;

// Validate if PORT is available
if (!PORT) {
  throw new Error('PORT is not defined in the environment variables.');
}
