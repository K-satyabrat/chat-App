import crypto from 'crypto';

// Generate a random string of 32 bytes and convert to base64
const secret = crypto.randomBytes(32).toString('base64');
console.log('Generated Secret:', secret); 