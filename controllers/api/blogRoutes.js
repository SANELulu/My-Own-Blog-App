const router = require('express').Router();
const { blogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/newBlog', withAuth, async (req, res) => {
    
    try{
        const newBlog = await blogPost.create({
            blog_title: req.body.blogTitle,
            blog_body: req.body.blogBody,
            private: req.body.private,
            user_id: req.session.user_id
        });
        req.session.save(() => {
            res.status(200).json(newBlog);
            return res;
        })
    } catch (err) {
        res.status(400).json(err);
    }
})


module.exports = router;