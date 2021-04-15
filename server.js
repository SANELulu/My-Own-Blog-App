const path = require('path');
const express = require('express');
const session = require('express-session');
const exphs = require('express-handlebars');
const controllers = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const compression = require('compression');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
const hbs = exphs.create({});

const sess = {
        secret: process.env.SECRET,
        cookie: {},
        resave: false,
        saveUninitialized: true,
        store: new SequelizeStore({
            db: sequelize
        })
    };

app.use(session(sess));
app.use(compression()) 
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(controllers);

sequelize.sync({force:false}). then( () => {
    app.listen(PORT, () => console.log(`now listening on: ${PORT}`))
});
