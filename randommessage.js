// Arrays of different parts of a message
const greetings = [
    'You are awesome!', 'Keep pushing!','The future is yours to code!',
  ];
  
  const subjects = [
    'Anyone who',  'A programmer who','Those who learn to code',
  ];
  
  const verbs = [
    'can code',  'builds amazing things','solves problems','makes a difference',
  ];
// Function to generate a random message
function generateRandomMessage() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];

    return `${randomGreeting}, ${randomSubject} ${randomVerb} !`;
}

// Generate and log a random message
console.log(generateRandomMessage());