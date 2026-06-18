# Full Deployment Guide

This project includes a full stack with:
- `frontend/` — React + Vite
- `backend/auth-service/` — Spring Boot auth service
- `backend/movie-service/` — Spring Boot movie service
- `backend/api-gateway/` — Spring Cloud Gateway
- PostgreSQL database

## Local full-stack deployment

Start the full stack with Docker Compose:

```bash
docker compose -f docker-compose.fullstack.yml up --build
```

Then open:
- `http://localhost` for the frontend
- `http://localhost:8080` for the API gateway
- `http://localhost:8081` for the auth service
- `http://localhost:8082` for the movie service

## Backend-only local deployment

Start the backend stack with PostgreSQL:

```bash
docker compose -f docker-compose.backend.yml up --build
```

## Frontend environment variables

In `frontend/.env.example`:

```env
VITE_API_BASE_URL=https://your-gateway-hostname
```

For local full-stack Docker, the frontend is built automatically with:

```text
VITE_API_BASE_URL=http://api-gateway:8080
```

## Cloud deployment strategy

### Backend
Deploy backend services individually on a platform like Render or Railway.

- Build command: `./mvnw -B -DskipTests package`
- Start command: `java -jar target/*.jar`

Set env vars per service:

Auth service:
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SERVER_PORT=8081`

Movie service:
- `SPRING_DATASOURCE_URL`
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SERVER_PORT=8082`

API gateway:
- `SERVER_PORT=8080`
- `AUTH_SERVICE_URL=https://<auth-service-host>`
- `MOVIE_SERVICE_URL=https://<movie-service-host>`
- `FRONTEND_URL=https://<frontend-host>`

### Frontend
Deploy the `frontend/` folder to Vercel or Netlify.
Set the environment variable:

```env
VITE_API_BASE_URL=https://<your-gateway-hostname>
```

If using Vercel, the build command is:

```bash
npm ci && npm run build
```

and the output directory is `dist`.

### Continuous Integration

A GitHub Actions workflow has been added at `.github/workflows/fullstack-ci.yml`.
It builds:
- `backend/api-gateway`
- `backend/auth-service`
- `backend/movie-service`
- `frontend`

This ensures backend and frontend builds pass on every push and pull request.
