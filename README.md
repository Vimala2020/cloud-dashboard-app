# 🚀 DevSecOps Observability Dashboard

A complete end-to-end **DevSecOps observability system** built using Node.js, Docker, Kubernetes, Prometheus, and Grafana.

---

## 📌 Overview

This project demonstrates how to build a real-world observability pipeline:

```text
GitHub Actions → Docker → Kubernetes → Prometheus → Grafana
```

It monitors application traffic, performance, and system metrics in real time.

---

## 🛠️ Tech Stack

* **Backend:** Node.js (Express)
* **Containerization:** Docker
* **CI/CD:** GitHub Actions
* **Orchestration:** Kubernetes (Docker Desktop)
* **Monitoring:** Prometheus
* **Visualization:** Grafana

---

## ⚙️ Features

* 📦 Dockerized Node.js application
* 🔁 CI/CD pipeline with GitHub Actions
* ☸️ Kubernetes deployment with scaling
* 📊 Prometheus metrics scraping (`/metrics`)
* 📈 Grafana dashboards for:

  * Requests per second (RPS)
  * Error rate tracking
  * Endpoint usage
  * HTTP method distribution
  * CPU & memory metrics
* ⚡ Custom metrics using `prom-client`
* 🚨 Simulated error endpoints for testing

---

## 📁 Project Structure

```
cloud-dashboard/
│
├── .github/workflows/ci.yaml
├── Dockerfile
├── index.js
├── package.json
├── k8s/
│   ├── deployment.yaml
│   ├── service.yaml
│   ├── prometheus.yaml
│   └── grafana.yaml
```

---

## 🚀 Getting Started

### 1. Clone Repo

```bash
git clone <your-repo-url>
cd cloud-dashboard
```

---

### 2. Run Locally

```bash
npm install
node index.js
```

Visit:

```
http://localhost:3000
```

---

### 3. Build Docker Image

```bash
docker build -t <your-dockerhub-username>/cloud-dashboard-app .
```

---

### 4. Deploy to Kubernetes

```bash
kubectl apply -f k8s/
```

---

### 5. Access Services

* App → http://localhost:30080
* Prometheus → http://localhost:30090
* Grafana → http://localhost:30300

---

## 📊 Sample Prometheus Queries

```promql
rate(http_requests_total[1m])
sum by (route) (rate(http_requests_total[1m]))
sum(rate(http_requests_total{status!~"2.."}[1m]))
histogram_quantile(0.95, rate(http_request_duration_seconds_bucket[1m]))
```

---

## 📈 Grafana Dashboard

The dashboard visualizes:

* 📉 Real-time traffic (RPS)
* ❌ Error rates
* 🧭 API endpoint usage
* 🧭 Latency


---

## 🧠 Key Learnings

* End-to-end CI/CD pipeline setup
* Kubernetes deployment and service exposure
* Prometheus metrics collection and scraping
* Grafana dashboard creation
* Debugging observability pipelines

---

## 🎯 Practical Usage of DevSecOps Dashboard

Monitor real-time traffic (Requests Per Second) to understand application load
Detect and analyze error rates (4xx, 5xx) for faster debugging
Track API latency (P95 response time) to identify performance bottlenecks
Gain insights into endpoint usage to optimize frequently used APIs
Monitor CPU and memory usage of containers to prevent resource exhaustion
Validate CI/CD deployments by checking system health and metrics post-release
Ensure Kubernetes service and pod health by verifying traffic flow
Detect anomalies and support incident response (SRE practices)
Analyze historical trends for capacity planning and scaling decisions
Provide a centralized view for DevSecOps observability and system monitoring

## 🎯  Simple Visual Flow 

GitHub → GitHub Actions → Docker → Kubernetes → /metrics
                                            ↓
                                      Prometheus
                                            ↓
                                         Grafana
                                            ↓
                                          User


## 🎯 Future Improvements

* 🔐 Security scanning (Trivy)
* ☁️ Deploy to AWS EKS
* 📊 Advanced dashboards & SLO tracking

---

## 👩‍💻 Author

Built as a hands-on DevSecOps project to demonstrate real-world skills in monitoring and infrastructure automation.

---

⭐ If you found this useful, consider starring the repo!
