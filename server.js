const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(express.json());

// In-memory database
let orders = [];

// Price configuration
const PRICES = {
  shirt: 50,
  pants: 80,
  saree: 100,
};

// Allowed statuses
const VALID_STATUSES = ["RECEIVED", "PROCESSING", "READY", "DELIVERED"];


// ✅ 1. CREATE ORDER
app.post("/orders", (req, res) => {
  try {
    const { customerName, phone, garments } = req.body;

    if (!customerName || !phone || !garments || garments.length === 0) {
      return res.status(400).json({ error: "Invalid input" });
    }

    let total = 0;

    for (let item of garments) {
      const type = item.type.toLowerCase();
      const price = PRICES[type];

      if (!price) {
        return res.status(400).json({ error: `Invalid garment type: ${item.type}` });
      }

      total += price * item.quantity;
    }

    const order = {
      id: uuidv4(),
      customerName,
      phone,
      garments,
      total,
      status: "RECEIVED",
      createdAt: new Date(),
    };

    orders.push(order);

    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ 2. UPDATE ORDER STATUS
app.patch("/orders/:id/status", (req, res) => {
  try {
    const { status } = req.body;

    if (!VALID_STATUSES.includes(status)) {
      return res.status(400).json({ error: "Invalid status" });
    }

    const order = orders.find(o => o.id === req.params.id);

    if (!order) {
      return res.status(404).json({ error: "Order not found" });
    }

    order.status = status;

    res.json(order);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ 3. GET ALL ORDERS (WITH FILTERS)
app.get("/orders", (req, res) => {
  try {
    const { status, search } = req.query;

    let result = [...orders];

    // Filter by status
    if (status) {
      result = result.filter(o => o.status === status);
    }

    // Search by name or phone
    if (search) {
      const searchLower = search.toLowerCase();
      result = result.filter(o =>
        o.customerName.toLowerCase().includes(searchLower) ||
        o.phone.includes(search)
      );
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ 4. DASHBOARD
app.get("/dashboard", (req, res) => {
  try {
    const totalOrders = orders.length;

    const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);

    const statusCount = {
      RECEIVED: 0,
      PROCESSING: 0,
      READY: 0,
      DELIVERED: 0,
    };

    orders.forEach(o => {
      statusCount[o.status]++;
    });

    res.json({
      totalOrders,
      totalRevenue,
      ordersByStatus: statusCount,
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});


// ✅ 5. ROOT CHECK
app.get("/", (req, res) => {
  res.send("Laundry Order Management API is running 🚀");
});


// ✅ START SERVER
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});