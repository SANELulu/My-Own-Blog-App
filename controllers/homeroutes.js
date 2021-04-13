const router = require('express').Router();
const {  User } = require('../models');
const withAuth = require('../utils/auth');
console.log('hitting controllers/homeroutes.js')

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/profile', (req, res) => {
    res.render('profile');
})

module.exports = router;