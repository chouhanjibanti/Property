# NextProperty - Server

This is the backend server for the NextProperty application, a full-stack real estate property listing website built using the MERN stack.

## Tech Stack
- **Node.js**: JavaScript runtime for building the server.
- **Express.js**: Web framework for Node.js to handle routing and middleware.
- **MongoDB**: NoSQL database for storing property listings and user information.
- **Cloudinary**: Service for image uploads and management.
- **JWT**: JSON Web Token for user authentication.

## Features
- User authentication with JWT (Login/Signup).
- CRUD operations for property listings.
- Image upload functionality using Cloudinary.
- Admin panel for managing property listings.
- Search and filter properties by type and price.

## Folder Structure
- **src/**: Contains all the source code for the server.
  - **config/**: Configuration files for database and Cloudinary.
  - **controllers/**: Logic for handling requests and responses.
  - **middleware/**: Custom middleware for authentication and file uploads.
  - **models/**: MongoDB schemas for User and Property.
  - **routes/**: API routes for authentication and property management.
  - **utils/**: Utility functions, including JWT handling.
  - **app.js**: Initializes the Express application and middleware.
  - **server.js**: Starts the server and connects to the database.

## Getting Started
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the Server directory:
   ```
   cd NextProperty/Server
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Create a `.env` file in the Server directory and add your environment variables:
   ```
   MONGODB_URI=<your_mongodb_connection_string>
   CLOUDINARY_URL=<your_cloudinary_url>
   JWT_SECRET=<your_jwt_secret>
   ```
5. Start the server:
   ```
   npm run dev
   ```

## API Endpoints
- **Authentication**
  - `POST /api/auth/register`: Register a new user.
  - `POST /api/auth/login`: Login an existing user.

- **Properties**
  - `GET /api/properties`: Get all properties.
  - `POST /api/properties`: Add a new property.
  - `PUT /api/properties/:id`: Edit an existing property.
  - `DELETE /api/properties/:id`: Delete a property.

## License
This project is licensed under the MIT License. See the LICENSE file for details.