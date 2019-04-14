const express = require('express');

const users = require('./controllers/users');
const peoples = require('./controllers/peoples');
const foods = require('./controllers/foods');
const exercises = require('./controllers/exercises');
const exercise_types = require('./controllers/exercise_types');
const workoutPlans = require('./controllers/workoutPlans');
const body_histories = require('./controllers/body_histories');

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/peoples', peoples);
app.use('/foods', foods);
app.use('/exercises', exercises);
app.use('/exercise_types', exercise_types);
app.use('/workoutPlans', workoutPlans);
app.use('/body_histories', body_histories);

app.listen(port, () => console.log(`Example app http://localhost:${port}!`));


