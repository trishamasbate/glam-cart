// Import Sequelize's Model class and DataTypes object, along with the database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the ProductTag class that extends Model to utilize Sequelize's model functionality
class ProductTag extends Model {}

// Initialize the ProductTag model with its schema and configuration
ProductTag.init(
  {
    // Define the schema for the ProductTag model
    id: {
      type: DataTypes.INTEGER, // Use INTEGER data type for the 'id' field
      allowNull: false,        // 'id' cannot be null
      primaryKey: true,        // 'id' is the primary key
      autoIncrement: true,     // 'id' should auto-increment
    },
    product_id: {
      type: DataTypes.INTEGER, // Use INTEGER data type for the 'product_id' field
      references: {
        model: 'product',      // This creates a foreign key relationship to the 'product' model
        key: 'id',             // The 'product_id' field references the 'id' field in the 'product' model
      },
    },
    tag_id: {
      type: DataTypes.INTEGER, // Use INTEGER data type for the 'tag_id' field
      references: {
        model: 'tag',          // This creates a foreign key relationship to the 'tag' model
        key: 'id',             // The 'tag_id' field references the 'id' field in the 'tag' model
      },
    },
  },
  {
    // Model configuration options
    sequelize,             // The database connection instance
    timestamps: false,     // Do not automatically add timestamp fields (createdAt, updatedAt)
    freezeTableName: true, // Prevent Sequelize from pluralizing the table name
    underscored: true,     // Use underscored versions of column names (e.g., 'product_id' instead of 'productId')
    modelName: 'product_tag', // Explicitly define the model name as 'product_tag'
  }
);

// Export the ProductTag model for use in other parts of the application
module.exports = ProductTag;