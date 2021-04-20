const User = require('./user');
const blogPost = require('./blogpost');
const Comment = require('./comment');

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});

blogPost.belongsTo(User, {
    foreignKey: "user_id",
    
});

blogPost.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(blogPost, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});


module.exports = { User, blogPost, Comment };