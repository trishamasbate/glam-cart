// Importing Sequelize modules and database connection
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Defining the Product model by extending Sequelize's Model class
class Product extends Model {}

// Initializing the Product model with its schema and configuration
Product.init(
  {
    // Schema definition
    id: {
      type: DataTypes.INTEGER, // Data type for product ID
      allowNull: false,        // Cannot be null
      primaryKey: true,        // Primary key
      autoIncrement: true,     // Auto-increment
    },
    product_name: {
      type: DataTypes.STRING,  // Data type for product name
      allowNull: false,        // Cannot be null
    },
    price: {
      type: DataTypes.DECIMAL, // Data type for price
      allowNull: false,        // Cannot be null
      validate: {
        isDecimal: true,       // Validation to ensure the value is a decimal
      },
    },
    stock: {
      type: DataTypes.INTEGER, // Data type for stock
      allowNull: false,        // Cannot be null
      defaultValue: 10,        // Default value if none is provided
      validate: {
        isNumeric: true,       // Validation to ensure the value is numeric
      },
    },
    category_id: {
      type: DataTypes.INTEGER, // Data type for foreign key to Category model
      references: {
        model: 'category',     // References the 'category' model
        key: 'id',             // Specifically, the 'id' field of the 'category' model
      },
    },
  },
  {
    // Model configuration
    sequelize,             // Database connection instance
    timestamps: false,     // Disables automatic creation of createdAt and updatedAt fields
    freezeTableName: true, // Prevents Sequelize from renaming the table
    underscored: true,     // Allows for underscored column names
    modelName: 'product',  // Name of the model
  }
);

// Exporting the Product model for use elsewhere in the application
module.exports = Product;