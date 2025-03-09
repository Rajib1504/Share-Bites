# Zomato Clone Backend 🍔 

This backend is part of the Zomato Clone project, designed to manage food donations and requests. It provides an efficient server-side application for handling user authentication, CRUD operations for food items, donation requests, and role-based access control.

## 🚀 Project Overview
The Zomato Clone Backend enables users to manage food donations and requests in a secure environment. It allows users to create, update, and delete food items, search for food by name, and request donations. The platform supports role-based access control, ensuring that only authorized users can manage donations. The backend also implements secure authentication via JSON Web Tokens (JWT) and stores sensitive data using cookies.

This backend is connected to a frontend hosted at [Zomato Clone](https://zomato-37f5f.web.app), providing a complete end-to-end solution for food donation management.

## 🔗 Live Project URL
- The live version of the frontend connected to this backend is hosted at:  
  [Zomato Clone](https://zomato-37f5f.web.app)

## ⚡ Key Features
- **User Authentication**: Secure user authentication using JWT tokens.
- **CRUD Operations**: Full support for CRUD operations on food items (Create, Read, Update, Delete).
- **Search Functionality**: Ability to filter food items by name for easier search.
- **Food Donations**: Users can request food donations, with user-specific data handling.
- **Role-Based Access Control**: Different user roles (admin and regular users) with access control for managing and deleting food items.
- **Secure Token Handling**: JWT tokens are stored securely using cookies for authentication.

## 🛠️ Technologies Used
The backend is built using the following technologies:
- **Node.js**: Server-side JavaScript runtime environment.
- **Express.js**: Web framework for building the API.
- **MongoDB**: NoSQL database for storing food and user data.
- **JWT (JSON Web Tokens)**: For secure user authentication.
- **Cookie-parser**: For parsing cookies and managing secure tokens.
- **CORS**: For handling cross-origin requests.
- **dotenv**: For managing environment variables and sensitive data.

## 📦 NPM Packages Used
- `express` - Web framework for Node.js.
- `jsonwebtoken` - For creating and verifying JWT tokens.
- `cookie-parser` - For parsing cookies to handle JWT tokens.
- `cors` - For handling Cross-Origin Resource Sharing.
- `dotenv` - For managing environment variables.
- `mongodb` - MongoDB driver for interacting with the database.

## 📝 Setup Instructions

To set up this backend locally, follow the steps below:

1. **Clone the repository**:
    ```bash
    git clone <repository-url>
    ```

2. **Navigate to the project directory** and install dependencies:
    ```bash
    cd zomato-clone-backend
    npm install
    ```

3. **Create a `.env` file** in the root directory and add the following environment variables:
    ```bash
    PORT=9000
    DB_user=<your-mongodb-username>
    DB_pass=<your-mongodb-password>
    JWT_SECRET=<your-jwt-secret-key>
    NODE_ENV=development
    ```

4. **Start the development server**:
    ```bash
    npm start
    ```

5. **Visit `http://localhost:9000`** to access the backend locally.

## 🧑‍💻 Endpoints

### Authentication
- **POST `/jwt`**: Generate a JWT token for user authentication.
- **POST `/logout`**: Logout and clear the JWT token.

### Food Management
- **POST `/food`**: Add a new food item.
- **GET `/food/sortedFoods`**: Fetch all available food items, sorted by expiry date.
- **GET `/foods/featuredFood`**: Fetch top 6 featured food items.
- **GET `/food/:id`**: Fetch details of a specific food item.
- **PUT `/food/update/:id`**: Update a specific food item.
- **DELETE `/food/:id`**: Delete a specific food item.

### Food Requests
- **POST `/food/:id`**: Request a specific food item.
- **GET `/food/requests/:email`**: Fetch food requests for a specific user based on their email.

## 🔐 License
This project is open-source and licensed under the **MIT License**. You are free to use, modify, and distribute this code with proper attribution.

## 🎉 Acknowledgements
Thank you for exploring the **Zomato Clone Backend**! If you have any questions or suggestions, feel free to reach out.

---

For further details, please refer to the frontend repository or contact the project maintainers.

### 📬 Contact
- **Email**: rajibsardar1542@gmail.com
