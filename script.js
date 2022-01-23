//pick random element from array
const random = arr => arr[Math.floor(Math.random() * arr.length)];

const dates = ['next month', 'this year', 'someday', 'in the future' ];

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


const randomNoP = Math.floor(Math.random() * noPredictions.length);
const randomP = Math.floor(Math.random() * predictions.length);

// pseudo-random boolean that decides if user receives a prediction or not
const decide = Math.random() 
const fortuneDecision = num => num <= 0.4999 ? console.log(predictions[randomNoP]) : console.log(noPredictions[randomP]);

fortuneDecision(decide);


