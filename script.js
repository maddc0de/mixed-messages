//pick random element from array
const random = arr => arr[Math.floor(Math.random() * arr.length)];

//random 1
const dates = ['next month', 'this year', 'someday', 'in the future' ];

//random 2
const noPredictions = [
    'you\'re poorly dressed, be extra first.',
    'don\'t count on me.',
    'you are unlucky. Period.',
    'not today.',
    'did you pay for my service? so nah',
    'don\'t expect me to tell you the future',
    'come back next time. maybe in another lifetime',
    '..this isn\'t a cookie'
];

//random 3
const predictions = [
    `life won't always be this miserable. You'll get through this, ${random(dates)}. Maybe..`,
    `you will receive a huge present ${random(dates)} -a box of regrets`,
    `your luck will change ${random(dates)} -for the worse`,
    `hope and dreams are definitely possible to achieve ${random(dates)} -just not for you.`,
    `${random(dates)}, someone will find you attractive. That someone is obviously lying.`,
    `you will find your purpose ${random(dates)} -as a bad example.`,
    `happinesss is just around the corner ${random(dates)} for you. too bad, the earth is round.`,
    `${random(dates)}, You are going to cry so much, nothing new I know but that\'s ok lol`
];

// pseudo-random boolean that decides if user receives a prediction or not
const decide = Math.random() 
const fortuneDecision = num => num <= 0.4999 ? 
console.log('Misfortune Cookie says: ' + random(predictions).toUpperCase()) : 
console.log('Misfortune Cookie says: ' + random(noPredictions).toUpperCase());

fortuneDecision(decide);


