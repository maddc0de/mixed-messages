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
    `life won't always be this miserable. You'll get through this, ${dates}. Maybe..`,
    `you will receive a huge present ${dates} -a box of regrets`,
    `your luck will change ${dates} -for the worse`,
    `hope and dreams are definitely possible to achieve ${dates} -just not for you.`,
    `${dates}, someone will find you attractive. That someone is obviously lying.`,
    `you will find your purpose ${dates} -as a bad example.`,
    `happinesss is just around the corner ${dates} for you. too bad, the earth is round.`,
    `${dates}, You are going to cry so much, nothing new I know but that\'s ok lol`
];

// pseudo-random boolean that decides if user receives a prediction or not
const decide = Math.random() 
console.log(decide);

const randomNoP = Math.floor(Math.random() * noPredictions.length);
const randomP = Math.floor(Math.random() * predictions.length);

const fortuneDecision = num => num <= 0.4999 ? console.log(predictions[randomNoP]) : console.log(noPredictions[randomP]);
fortuneDecision(decide);


