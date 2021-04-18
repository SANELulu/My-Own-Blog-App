const router = require('express').Router();
const { User, blogPost } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/newBlog', withAuth, async (req, res) => {
    console.log('++++++++++++++++')
    console.log(req.body)
    console.log('++++++++++++++++')
    console.log(req.session)
    console.log('++++++++++++++++')
    
    try{
       const user= await User.findOne({ where: { id: req.session.user_id}});
        console.log(user)
        const newBlog = await blogPost.create({
            
            blog_title: req.body.blogTitle,
            blog_body: req.body.blogBody,
            private: req.body.private,
            user_id: req.session.user_id,
            // author: req.name,
            
            date: new Date().toISOString().split('T')[0]
        });
        req.session.save(() => {
            res.status(200).json(newBlog);
            return res;
        })
    } catch (err) {
        res.status(400).json(err);
    }
})
router.delete('/:id', withAuth, async (req, res) => {
    try{
        const deletedPost = await blogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
        
            },
        });
        if(!deletedPost) {
            res.status(404).json({ message: 'No data found here!'});
            return;
        }
    } catch (err) {
        res.status(500) (err);
    }
})



module.exports = router;