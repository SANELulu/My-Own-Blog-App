const router = require('express').Router();
const {  User, blogPost } = require('../models');
const withAuth = require('../utils/auth');
console.log('hitting controllers/homeroutes.js')

router.get('/', async (req, res) => {
    try {
      const postData = await blogPost.findAll({
        include: [
          {
            model: User,
            attributes: ['name'],
          },
          // {
          //   model: Comment,
          //   attributes: ['comment_body', 'date', 'user_id'],
          // },
        ],
      });
  
      const posts = postData.map((post) => post.get({ plain: true }));
      console.log(posts);

      res.render('homepage', {
        posts, 
        //  comments,
      });
    } catch (err) {
      res.status(500).json(err);
    }
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
                include: {
                    model: User,
                } 
            }
        })
        const postsUser = userData.get({ plain: true });
        console.log("+++++++++++")
        console.log(postsUser);
        console.log("+++++++++++")
        res.render('profile', {
          postsUser,
          logged_in: true
        });
      } catch (err) {
        console.log(err)
      }
})


module.exports = router;