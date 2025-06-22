# Product API

A RESTful API built using Express.js for managing a collection of products.

## 🚀 Features

* Full CRUD operations for products
* Middleware for logging, authentication, and validation
* Global error handling with custom error classes
* Filtering, pagination, and search
* Product statistics endpoint

## 📦 Technologies Used

* Node.js
* Express.js
* UUID
* Nodemon (for development)

---

## 📂 Folder Structure

```
express-api-assignment/
├── middleware/
│   ├── auth.js
│   ├── logger.js
│   └── validateProduct.js
├── errors/
│   ├── NotFoundError.js
│   └── ValidationError.js
├── server.js
└── package.json
```

---

## 🔐 Authentication

* All modifying routes (POST, PUT, DELETE) require an `x-api-key` header.
* Valid API key: `123456`

Example:

```
Header: x-api-key: 123456
```

---

## 📘 API Endpoints

### Root

```
GET /
Response: "Welcome to the Product API! Go to /api/products to see all products."
```

### Get All Products

```
GET /api/products
Query Params:
  - category (optional)
  - page (optional, default=1)
  - limit (optional, default=2)
  - search (optional)

Example: /api/products?category=electronics&page=1&limit=2&search=laptop
```

**Response:**

```json
{
  "total": 1,
  "results": [
    {
      "id": "1",
      "name": "Laptop",
      "description": "High-performance laptop with 16GB RAM",
      "price": 1200,
      "category": "electronics",
      "inStock": true
    }
  ]
}
```

### Get Product by ID

```
GET /api/products/:id
```

**Response:**

```json
{
  "id": "2",
  "name": "Smartphone",
  "description": "Latest model with 128GB storage",
  "price": 800,
  "category": "electronics",
  "inStock": true
}
```

### Create Product

```
POST /api/products
Headers:
  x-api-key: 123456
Body:
{
  "name": "Blender",
  "description": "High-speed blender",
  "price": 99.99,
  "category": "kitchen",
  "inStock": true
}
```

**Response:** `201 Created`

```json
{
  "id": "<generated>",
  "name": "Blender",
  "description": "High-speed blender",
  "price": 99.99,
  "category": "kitchen",
  "inStock": true
}
```

### Update Product

```
PUT /api/products/:id
Headers:
  x-api-key: 123456
Body:
{
  "name": "New Product Name",
  "price": 1500
}
```

**Response:**

```json
{
  "id": "1",
  "name": "New Product Name",
  "description": "High-performance laptop with 16GB RAM",
  "price": 1500,
  "category": "electronics",
  "inStock": true
}
```

### Delete Product

```
DELETE /api/products/:id
Headers:
  x-api-key: 123456
```

**Response:**

```json
{
  "id": "3",
  "name": "Coffee Maker",
  ...
}
```

### Product Stats

```
GET /api/products/stats
```

**Response:**

```json
{
  "electronics": 2,
  "kitchen": 1
}
```

---

## 🧱 Middleware

### Logger

Logs method, URL, and timestamp for every request.

### Auth

Checks for a valid API key in `x-api-key` header.

### Validation

Validates product fields on creation/update.

---

## ❌ Error Handling

* `NotFoundError` – for missing products
* `ValidationError` – for bad input
* Global error handler returns structured JSON errors

Example response:

```json
{
  "error": "Product not found"
}
```

---

## 📜 License

ISC License

---

## 👨‍💻 Author

Solomon
