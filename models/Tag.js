// Import Sequelize's Model class and DataTypes object, along with the database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the Tag class that extends Model to utilize Sequelize's model functionality
class Tag extends Model {}

// Initialize the Tag model with its schema and configuration
Tag.init(
  {
    // Define the schema for the Tag model
    id: {
      type: DataTypes.INTEGER, // Use INTEGER data type for the 'id' field
      allowNull: false,        // 'id' cannot be null
      primaryKey: true,        // 'id' is the primary key
      autoIncrement: true,     // 'id' should auto-increment
    },
    tag_name: {
      type: DataTypes.STRING,  // Use STRING data type for the 'tag_name' field
                              // 'tag_name' does not have a 'null' constraint, making it optional
    },
  },
  {
    // Model configuration options
    sequelize,             // The database connection instance
    timestamps: false,     // Do not automatically add timestamp fields (createdAt, updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true,     // Use underscored versions of column names (e.g., 'tag_name' instead of 'tagName')
    modelName: 'tag',      // Explicitly define the model name as 'tag'
  }
);

// Export the Tag model for use in other parts of the application
module.exports = Tag;