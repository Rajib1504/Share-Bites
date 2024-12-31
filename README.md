<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Zomato Clone Backend - README</title>
</head>
<body>
  <h1>Zomato Clone Backend</h1>

  <h2>Purpose</h2>
  <p>
    This backend is part of the Zomato Clone project. It serves as the server-side application to manage user authentication, food items, donation requests, and more. The project is designed to provide a seamless experience for food donators and requestors.
  </p>

  <h2>Live URL</h2>
  <p>
    The live version of the frontend connected to this backend is hosted at: 
    <a href="https://zomato-37f5f.web.app" target="_blank">https://zomato-37f5f.web.app</a>
  </p>

  <h2>Key Features</h2>
  <ul>
    <li>User authentication with JSON Web Tokens (JWT).</li>
    <li>CRUD operations for food items.</li>
    <li>Search functionality to filter food items by name.</li>
    <li>Request food donations with user-specific data handling.</li>
    <li>Role-based access control for managing and deleting donations.</li>
    <li>Secure token handling using cookies.</li>
  </ul>

  <h2>Technologies Used</h2>
  <ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (with MongoClient)</li>
    <li>JSON Web Tokens (JWT) for authentication</li>
    <li>Cookie-parser for handling cookies</li>
    <li>CORS for handling cross-origin requests</li>
    <li>dotenv for environment variable management</li>
  </ul>

  <h2>NPM Packages</h2>
  <ul>
    <li><code>express</code> - Web framework for Node.js</li>
    <li><code>jsonwebtoken</code> - For creating and verifying JWT tokens</li>
    <li><code>cookie-parser</code> - For parsing cookies</li>
    <li><code>cors</code> - For managing Cross-Origin Resource Sharing</li>
    <li><code>dotenv</code> - For managing environment variables</li>
    <li><code>mongodb</code> - For interacting with MongoDB</li>
  </ul>

  <h2>Setup Instructions</h2>
  <ol>
    <li>Clone this repository:
      <pre><code>git clone &lt;repository-url&gt;</code></pre>
    </li>
    <li>Navigate to the project directory and install dependencies:
      <pre><code>npm install</code></pre>
    </li>
    <li>Create a <code>.env</code> file in the root directory and add the following:
      <pre><code>
PORT=9000
DB_user=&lt;your-mongodb-username&gt;
DB_pass=&lt;your-mongodb-password&gt;
JWT_SECRET=&lt;your-jwt-secret-key&gt;
NODE_ENV=development
      </code></pre>
    </li>
    <li>Start the development server:
      <pre><code>npm start</code></pre>
    </li>
  </ol>

  <h2>Endpoints</h2>
  <h3>Authentication</h3>
  <ul>
    <li><code>POST /jwt</code> - Generate a JWT token</li>
    <li><code>POST /logout</code> - Logout and clear the token</li>
  </ul>

  <h3>Food Management</h3>
  <ul>
    <li><code>POST /food</code> - Add a new food item</li>
    <li><code>GET /food/sortedFoods</code> - Fetch all available food items, sorted by expiry date</li>
    <li><code>GET /foods/feturedFood</code> - Fetch top 6 featured food items</li>
    <li><code>GET /food/:id</code> - Fetch details of a specific food item</li>
    <li><code>PUT /food/update/:id</code> - Update a specific food item</li>
    <li><code>DELETE /food/:id</code> - Delete a specific food item</li>
  </ul>

  <h3>Food Requests</h3>
  <ul>
    <li><code>POST /food/:id</code> - Request a specific food item</li>
    <li><code>GET /food/requests/:email</code> - Fetch food requests for a specific user</li>
  </ul>

  <h2>License</h2>
  <p>
    This project is open-source and licensed under the MIT License.
  </p>
</body>
</html>
