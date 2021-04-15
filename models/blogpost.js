const { Model, DataTypes} = require('sequelize');

const sequelize = require('../config/connection');

class blogPost extends Model {}

blogPost.init (
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        blog_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        blog_body: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        private: {
            type: DataTypes.TINYINT ,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        }

    },
    {
    sequelize, 
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blogPost',
    }
    );

    module.exports = blogPost;