// Arrays of different parts of a message
const greetings = ['Hello', 'Hi', 'Hey', 'Greetings'];
const subjects = ['everyone', 'world', 'friends', 'team'];
const verbs = ['is coding', 'loves programming', 'enjoys learning', 'creates cool projects'];
const objects = ['JavaScript', 'Python', 'Java', 'C++'];

// Function to generate a random message
function generateRandomMessage() {
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
    const randomVerb = verbs[Math.floor(Math.random() * verbs.length)];
    const randomObject = objects[Math.floor(Math.random() * objects.length)];

    return `${randomGreeting}, ${randomSubject} ${randomVerb} with ${randomObject}!`;
}

// Generate and log a random message
console.log(generateRandomMessage());