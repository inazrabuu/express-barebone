# Express Barebone

A **production-ready Express.js boilerplate** built for scalability, security, and developer efficiency.  
This starter kit provides a clean foundation with all the essentials: from authentication to testing — so you can focus on building features, not setup.

---

## 🚀 Features

### 🧱 Modular Architecture
- Well-structured folder organization for scalability and maintainability.
- Layered separation of routes, controllers, services, and middlewares.

### 🔐 Security First
- Preconfigured **Helmet**, **rate limiting**, **CORS**, and **input validation**.
- Prevents common web vulnerabilities (XSS, CSRF, SQL injection).

### 🧭 RBAC Authentication (JWT / Session)
- Built-in **role-based access control** for user-level permissions.
- Support for both **session-based** and **JWT-based** authentication.
- Plug-and-play middlewares for protecting routes and handling tokens.

### 🗃️ Prisma ORM Integration
- **Prisma** connected to **PostgreSQL** by default.
- Includes schema migration setup and environment-safe configuration.
- Centralized Prisma client for use across services.

### 🪵 Advanced Logger
- Custom **logger** using **Winston / Pino** with structured logs.
- Includes request tracing, timestamps, and environment-based verbosity.
- Integrated error and performance logging.

### ⚙️ Unified Error Handling
- Centralized error middleware for consistent API responses.
- Supports custom error types and automatic stack sanitization.
- 4xx and 5xx responses are standardized with error codes.

### 🧪 Test Ready
- Preconfigured **Jest / Supertest** for unit and integration testing.
- Example tests for routes and services.
- Ready for CI/CD integration and coverage reporting.

---

## Installation Guide
- clone this repo
- change directory to the newly created directory
- `cp .env-example .env`
- fill the necessary environment variables
- `npx prisma migrate dev`
- `npm run dev`
- API will default listen to PORT 3000 -> http://localhost:3000