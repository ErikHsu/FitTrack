const express = require('express');
const path = require('path');
//Controllers
const users = require('./controllers/users');
const peoples = require('./controllers/peoples');
const body_histories = require('./controllers/body_histories')
const exercises = require('./controllers/exercises');
const exercise_types = require('./controllers/exercise_types');
const workoutPlans = require('./controllers/workoutPlans');
const foods = require('./controllers/foods');

//Models
const userModel = require('./models/user');

const app = express();
const port = 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
})
/*    app.use(function (req, res, next) {
        try {
            const token = (req.headers.authorization || " ").split(' ')[1]
            req.user = userModel.getFromToken(token);
        } catch (error) {
            const openActions = ['POST/users', 'POST/users/login', 'POST/peoples/profile']
            /*
// check if login requiredF
            if (req.method != "OPTIONS" && !openActions.includes(req.method + req.path.toLowerCase())) { 
                next(Error("Login Required"));
            }
        }
        next();
        }
    })*/

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/peoples', peoples);
app.use('/body_histories', body_histories);
app.use('/exercises', exercises);
app.use('/exercise_types', exercise_types);
app.use('/workoutPlans', workoutPlans);
app.get('/exercises', exercises);
app.get('/exercise_types', exercise_types);
app.use('/foods', foods);


app.get("*", (req, res) => res.sendFile(path.join(__dirname, "../dist/index.html")))

app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send({ msg: err.message })
})

app.listen(port, () => console.log(`Example app http://localhost:${port}!`))