const router = require('express').Router();
const { blogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/newBlog', withAuth, async (req, res) => {
    
    try{
        const newBlog = await blogPost.create({
            blog_title: req.body.blogTitle,
            blog_body: req.body.blogBody,
            private: req.body.private,
            user_id: req.session.user_id,
            date: new Date().toLocaleString()
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