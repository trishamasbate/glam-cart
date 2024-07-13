// Importing necessary modules from sequelize package and the database connection configuration
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Defining a new class 'Category' that extends Sequelize's Model class
class Category extends Model {}

// Initializing the model with its schema definition
Category.init(
  {
    // Defining the schema for the Category model
    id: {
      type: DataTypes.INTEGER, // Specifies the data type of the 'id' field as integer
      allowNull: false,        // Makes the 'id' field not nullable
      primaryKey: true,        // Sets the 'id' field as the primary key
      autoIncrement: true,     // Enables auto increment for the 'id' field
    },
    category_name: {
      type: DataTypes.STRING, // Specifies the data type of the 'category_name' field as string
      allowNull: false,       // Makes the 'category_name' field not nullable
    },
  },
  {
    // Model options
    sequelize,              // Specifies the sequelize instance to attach this model to
    timestamps: false,      // Disables automatic timestamp fields (createdAt, updatedAt)
    freezeTableName: true,  // Prevents sequelize from pluralizing the table name
    underscored: true,      // Enables snake_case naming convention for automatically added attributes
    modelName: 'category',  // Defines the name of the model
  }
);

// Exporting the Category model for use in other parts of the application
module.exports = Category;