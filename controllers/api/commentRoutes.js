const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try{
        const newComment = await Comment.create({
            user_id: req.session.user_id,
            post_id: req.body.id,
            comment_body: req.body.comment,
            date: new Date().toISOString().split('T')[0]
        });
        res.status(200).json(newComment);
        return res;
    }catch (err){
        res.status(400).json(err)
    }
})
router.delete(':id', withAuth, async (req, res) => { 
    try{
        const deletedComment = await Comment.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        
        if(!deletedComment) {
            res.status(404).json({ message: 'Data not found!'});
            return;
        }
    res.status(200).json(deletedComment);
    } catch (err) {
        res.status(500) (err);
    }
})



module.exports = router;
