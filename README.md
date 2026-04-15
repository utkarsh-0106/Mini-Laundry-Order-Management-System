# 🧺 Mini Laundry Order Management System

## 📌 Overview

This is a simple backend system for managing laundry/dry cleaning orders.
It allows users to create orders, track their status, and view business insights through a dashboard.

---

## 🚀 Key Features

* Create orders with automatic billing calculation
* Update order status (RECEIVED → PROCESSING → READY → DELIVERED)
* View all orders with filtering and search
* Dashboard with total orders, revenue, and status breakdown

---

## 🛠️ Tech Stack

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

* Add customer name and phone number
* Add garments with quantity
* Automatically calculates total bill
* Generates unique order ID

---

### 2. Order Status Management

Supported statuses:

* RECEIVED
* PROCESSING
* READY
* DELIVERED

---

### 3. View Orders

* Retrieve all orders
* Filter by status
* Search by customer name or phone number

---

### 4. Dashboard

* Total number of orders
* Total revenue
* Orders grouped by status

---

## 🔌 API Endpoints

### Create Order

POST `/orders`

### Update Order Status

PATCH `/orders/:id/status`

### Get All Orders

GET `/orders`

### Dashboard

GET `/dashboard`

---

## 📬 Sample Request (Create Order)

```json
{
  "customerName": "Rahul",
  "phone": "9876543210",
  "garments": [
    { "type": "shirt", "quantity": 2 },
    { "type": "pants", "quantity": 1 }
  ]
}
```

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

### Where AI Needed Improvement

* Missing input validation
* Incorrect HTTP method usage in some cases
* Required manual debugging for request handling

---

### Improvements Made

* Added validation checks
* Ensured correct API methods (GET, POST, PATCH)
* Cleaned and structured code
* Fully tested all endpoints

---

## ⚖️ Tradeoffs

* Used in-memory storage (data resets on server restart)
* No authentication implemented
* No frontend UI included

---

## 🔮 Future Improvements

* Add database (MongoDB / SQL)
* Build frontend UI
* Add authentication system
* Add estimated delivery date
* Deploy the application

---

## 📸 Screenshots

### Create Order

![Create Order](https://github.com/user-attachments/assets/ae2f7e3b-f17f-49fb-8851-e9e76f7789ba)

### Update Status

![Update Status](https://github.com/user-attachments/assets/fe9d881e-dc09-40bb-98fb-06cfef60c6d9)

### Get Orders

![Get Orders](https://github.com/user-attachments/assets/1ddfc9df-2871-4720-90ad-68ae10a746a3)

### Dashboard

![Dashboard](https://github.com/user-attachments/assets/5ce54422-2124-4450-ba94-54232b88fe2a)

---

## 📸 Demo / Testing

Tested using Postman:

* Create order
* Update status
* Fetch orders
* View dashboard

---

## ✅ Conclusion

This project was built with a focus on speed, simplicity, and effective use of AI tools to accelerate development while maintaining clarity and functionality.
