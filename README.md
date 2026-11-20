# School Management System (SMS)

A full-stack school management system:

- **`frontend/`** — React 19 + Vite 8 + Tailwind CSS 4 web app.
- **`backend/`** — Express 5 + MongoDB REST API with JWT authentication.

## Requirements

- Node.js **20.19+** (22 LTS or newer recommended)
- pnpm **12+**
- MongoDB running locally (or a MongoDB Atlas connection string)

## Installation

```bash
pnpm run install:all
```

Or install each app separately:

```bash
pnpm --dir frontend install
pnpm --dir backend install
```

## Environment variables

Create `backend/.env` with the variables below (a `.env` file is ignored by git).
Create `frontend/.env` only if the API is not running on the default URL.

Backend variables:

| Variable | Description |
| --- | --- |
| `PORT` | API port (default `5000`) |
| `MONGO_URI` | MongoDB connection string |
| `JWT_SECRET` | Long random secret used to sign tokens (**required**) |
| `JWT_EXPIRES_IN` | Token lifetime (default `90d`) |
| `JWT_COOKIE_EXPIRES_IN` | Cookie lifetime in days (default `90`) |
| `CLIENT_URL` | Comma-separated list of allowed frontend origins |
| `NODE_ENV` | `development` or `production` |

Frontend variables:

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Backend API base URL (default `http://localhost:5000/api`) |

## Development

```bash
# Web app (http://localhost:5173)
pnpm run dev:frontend

# API (http://localhost:5000)
pnpm run dev:backend
```

## Build

```bash
# Web build -> frontend/dist
pnpm run build
```

## Lint

```bash
pnpm run lint
```

## API overview

| Method | Route | Description |
| --- | --- | --- |
| `POST` | `/api/auth/register` | Register a user |
| `POST` | `/api/auth/login` | Log in and receive a JWT cookie |
| `GET` | `/api/auth/logout` | Log out |
| `GET` | `/api/auth/me` | Current user (requires auth) |
| `GET` | `/api/students` | List students (Admin/Management/Staff) |
| `POST` | `/api/students` | Create a student (Admin/Management) |
| `GET/PUT/DELETE` | `/api/students/:id` | Read/update/delete a student |
| `GET` | `/api/settings` | Public site settings |
| `PUT` | `/api/settings` | Update site settings (Admin/Management) |
