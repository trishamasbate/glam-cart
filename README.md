# 🛍️  Glam Cart

[![github-follow](https://img.shields.io/github/followers/trishamasbate?label=Follow&logoColor=purple&style=social)](https://github.com/trishamasbate)
[![license](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)


## 📃 Description:
**Glam Cart** is an advanced e-commerce backend application designed to empower internet retail companies by leveraging cutting-edge technologies. It provides robust functionalities essential for competing in the dynamic landscape of online retail.

Features:

- **Express.js API**: Utilizes a robust Express.js API to handle HTTP requests and responses, ensuring efficient communication between clients and the server.

- **Database Connectivity**: Seamlessly connects to a PostgreSQL database using Sequelize ORM, facilitating reliable data storage and retrieval operations.

- **Database Initialization**: Supports schema and seed commands to set up a development database with predefined structures and test data, ensuring a ready-to-use environment.

- **Server Synchronization**: Automatically synchronizes Sequelize models with the PostgreSQL database upon application startup, maintaining data consistency and integrity.

- **API Endpoint for Categories**: Provides GET routes to fetch and display category data in JSON format, supporting efficient categorization of products.

- **API Endpoint for Products**: Includes GET routes to retrieve product information, allowing users to view detailed descriptions, prices, and availability.

- **API Endpoint for Tags**: Facilitates GET routes for tags, enabling users to access metadata and attributes associated with products.

- **CRUD Operations**: Implements comprehensive POST, PUT, and DELETE routes via Insomnia Core, enabling users to create, update, and delete category, product, and tag data effortlessly.

- **Error Handling**: Implements robust error handling mechanisms to provide informative responses and ensure smooth operation under various conditions.

- **Security Measures**: Incorporates security best practices to protect sensitive data and prevent unauthorized access, enhancing the integrity and trustworthiness of the platform.

**Glam Cart** is meticulously designed to meet the demanding requirements of modern e-commerce operations, offering a scalable and efficient backend solution for internet retail companies.

## 📌 Table of Contents
- [🛍️  Glam Cart](#️--glam-cart)
  - [📃 Description:](#-description)
  - [📌 Table of Contents](#-table-of-contents)
  - [🔎 User Story](#-user-story)
  - [✅ Acceptance Criteria](#-acceptance-criteria)
  - [💡 Usage and Installation Instructions](#-usage-and-installation-instructions)
  - [🎞️ Walkthrough Videos:](#️-walkthrough-videos)
  - [🗝️ Resources](#️-resources)
  - [❓ Questions](#-questions)
  - [🪪 License](#-license)

## 🔎 User Story
```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## ✅ Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, PostgreSQL username, and PostgreSQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the PostgreSQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```

## 💡 Usage and Installation Instructions

**Using the GitHub Repository:**

1.  Provide your login credentials in the `.env` file.
2.	Launch an integrated terminal directly from your editor.
3.  Install the necessary packages to initialize the application. You can also execute the command `npm install`.
    - [dotenv Version 8.2.0](https://www.npmjs.com/package/dotenv)
    - [Express.js Version 4.17.1](https://www.npmjs.com/package/express)
    - [pg Version 8.11.3](https://www.npmjs.com/package/pg)
    - [Sequelize Version 5.21.7](https://www.npmjs.com/package/sequelize)
4.	Navigate the directory containing the database schema, and create a new database using the `psql` command.
5.  Seed the created database with test data by executing the seed command as declared in the package.json file.
6.	Run the `npm start` command to start the Express server.
7.  Test the functionality of the application by using a tool like Insomnia Core.


## 🎞️ Walkthrough Videos:

**Click on the links below**
- [Glam Cart Walkthrough](https://youtu.be/3xAtrJ8KNFU?si=3SHx1dDOBzc4SBW6)
- [Insomnia Core: GET Routes Command Returning ALL Categories, Products, and Tags](https://youtu.be/r44XJW8_oTg?si=PRYsFWAj3-u2LHQU)
- [Insomnia Core: GET Routes Command Returning a SINGLE Category, Product, and Tag](https://youtu.be/mgoKb7ee0BE?si=TYJlDg5-XWrxlZQO)
- [Insomnia Core: POST, PUT, and DELETE Routes](https://youtu.be/nrzkRtM_8qc?si=GcqrbhAjhocerk83)


## 🗝️ Resources
- Dynamic JavaScript
- [Starter Code](https://github.com/coding-boot-camp/bookish-sniffle)
- License Badge: [Shields.io](https://shields.io/)
- [dotenv Version 8.2.0](https://www.npmjs.com/package/dotenv)
- [Express.js Version 4.17.1](https://www.npmjs.com/package/express)
- [pg Version 8.11.3](https://www.npmjs.com/package/pg)
- [Sequelize Version 5.21.7](https://www.npmjs.com/package/sequelize)
- [PostgreSQL](https://www.postgresql.org/)
- [Insomnia Core](https://insomnia.rest/products/insomnia)
- [Visual Studio Code](https://code.visualstudio.com/)


## ❓ Questions
Contact the author with any questions!<br>
Github link: [trishamasbate](https://github.com/trishamasbate)<br>
Email: trisha.masbate@gmail.com

## 🪪 License
This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.<br />

Copyright © 2024 [TRISHA MASBATE](https://github.com/trishamasbate)
  
<hr>
<p align='center'><i>
All the best! 🤟🏻 TRISHA MASBATE
</i></p>
  
