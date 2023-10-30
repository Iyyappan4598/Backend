const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Simulate a database of user credentials
const validUser = {
    Email: 'myuser',
  password: 'mypassword'
};

// Function to check the username and password
async function checkCredentials(Email, password) {
  // Simulate a database lookup (replace with actual database query)
  const userFromDatabase = { Email: validUser.Email, password: validUser.password };

  if (Email === userFromDatabase.Email && password === userFromDatabase.password) {
    return true; // Credentials are valid
  } else {
    return false; // Credentials are invalid
  }
}

async function main() {
  const Email = await askQuestion('Enter your username: ');
  const password = await askQuestion('Enter your password: ');

  const isAuthenticated = await checkCredentials(Email, password);

  if (isAuthenticated) {
    console.log('Login successful!');
  } else {
    console.log('Invalid username or password. Please try again.');
  }

  rl.close();
}

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, resolve);
  });
}

main();
