# File Management System - Backend

This is the backend of the File Management System, built using Node.js, Express.js, and MongoDB with Mongoose as the ODM. The backend provides a REST API for managing files, including the ability to upload and store images.

## Features

- **CRUD Operations**: Create, Read, Update, and Delete files.
- **Mongoose Integration**: Easy interaction with MongoDB using Mongoose.
- **File Storage**: Images are stored on the server, with paths saved in MongoDB.

## Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**

## Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd backend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up MongoDB**:
   Ensure you have MongoDB installed locally, or use a MongoDB Atlas connection string. 

   In `app.js`, update the `mongoURI` with your MongoDB connection string:
   ```javascript
   const mongoURI = 'your-mongo-db-connection-string';
   ```

4. **Run the server**:
   ```bash
   node app.js
   ```

   The server will run on `http://localhost:5001`.
