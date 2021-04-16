const router = require('express').Router();
const {  User, blogPost } = require('../models');
const withAuth = require('../utils/auth');
console.log('hitting controllers/homeroutes.js')

router.get('/', (req, res) => {
    res.render('homepage')
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('profile');
    }else{
    res.render('login')
    }
})
router.get('/post', (req,res) => {
        res.render('post');
} )

router.get('/profile', async (req, res) => {
   
    try{
        console.log(req.session.user_id)
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password']},
            include: {
                model: blogPost, 
            }
        })
        const postsUser = userData.get({ plain: true });
        console.log(postsUser);
        res.render('profile', {
          postsUser,
          logged_in: true
        });
      } catch (err) {
        console.log(err)
      }
})


module.exports = router;