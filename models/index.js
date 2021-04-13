const User = require('./user');
const blogPost = require('./blogpost');

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});
blogPost.belongsTo(User, {
    foreignKey: "blog_author"
});

module.exports = { User, blogPost };