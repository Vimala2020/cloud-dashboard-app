const express = require("express");
const client = require("prom-client");

const app = express();

// Create a Registry
const register = new client.Registry();

// Default metrics (CPU, memory, etc.)
client.collectDefaultMetrics({ register });

// Custom metric (VERY IMPORTANT for project value)
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestCounter);

// Middleware to count requests
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode,
    });
  });
  next();
});

// Sample route
app.get("/", (req, res) => {
  res.send("DevOps Dashboard App Running 🚀");
});

// Metrics endpoint (Prometheus will hit this)
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});