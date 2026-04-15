# 🧺 Mini Laundry Order Management System

## 📌 Overview

This is a simple backend system for managing laundry/dry cleaning orders.
It allows creating orders, tracking their status, and viewing business insights.

---

## 🚀 Tech Stack

* Node.js
* Express.js
* In-memory storage (no database)

---

## ⚙️ Setup Instructions

1. Clone the repository:

```
git clone <your-repo-link>
cd <your-project-folder>
```

2. Install dependencies:

```
npm install
```

3. Run the server:

```
node server.js
```

4. Open in browser:

```
http://localhost:3000
```

---

## 📦 Features Implemented

### 1. Create Order

* Add customer name & phone
* Add garments with quantity
* Auto-calculates total bill
* Generates unique order ID

---

### 2. Order Status Management

Supported statuses:

* RECEIVED
* PROCESSING
* READY
* DELIVERED

Update status using API

---

### 3. View Orders

* Get all orders
* Filter by status
* Search by name or phone

---

### 4. Dashboard

* Total number of orders
* Total revenue
* Orders grouped by status

---

## 🔌 API Endpoints

### Create Order

POST `/orders`

### Update Status

PATCH `/orders/:id/status`

### Get Orders

GET `/orders`

### Dashboard

GET `/dashboard`

---

## 🤖 AI Usage Report

### Tools Used

* ChatGPT
* GitHub Copilot (optional)

---

### Sample Prompts Used

* "Create a Node.js Express API for order management system"
* "Add endpoint to update order status"
* "Implement filtering by status and search"
* "Fix bug in PATCH request"

---

### Where AI Helped

* Generated initial backend structure
* Helped implement API endpoints
* Assisted in debugging errors
* Guided Postman testing

---

### Where AI Was Incorrect / Needed Fixes

* Missing input validation
* Incorrect HTTP method usage
* Needed manual debugging for request handling

---

### Improvements Made

* Added validation checks
* Ensured correct API methods (GET, POST, PATCH)
* Cleaned and structured code
* Tested all endpoints properly

---

## ⚖️ Tradeoffs

* Used in-memory storage (data resets on restart)
* No authentication implemented
* No frontend UI

---

## 🔮 Future Improvements

* Add database (MongoDB)
* Build frontend UI
* Add authentication system
* Add estimated delivery date
* Deploy the application

---

## 📸 Demo / Testing

Tested using Postman:

* Create order
* Update status
* Fetch orders
* View dashboard

Screenshots attached in submission.

---
