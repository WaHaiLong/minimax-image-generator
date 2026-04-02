// Test setup - runs before all tests

// Set test environment
process.env.NODE_ENV = 'test';

// BASE_URL defaults to production server if not set
if (!process.env.BASE_URL) {
  process.env.BASE_URL = 'https://minimax-image-generator.onrender.com';
}

console.log(`Testing against: ${process.env.BASE_URL}`);
