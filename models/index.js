const User = require('./user');
const blogPost = require('./blogpost');

User.hasMany(blogPost, {
    foreignKey: 'user_id',
    onDelete: 'Cascade',
});

blogPost.belongsTo(User, {
    foreignKey: "user_id",
    
});
// blogPost.belongsTo(User, {
//     foreignKey: "author",
    
// });

module.exports = { User, blogPost };