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
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        // author: {
        //     type: DataTypes.STRING,
        //     references: {
        //         model: 'user',
        //         key: 'name'
        //     }
        // },

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