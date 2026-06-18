# Cineverse

Full-stack video streaming demo built with:
- React + Vite frontend
- Spring Boot auth service
- Spring Boot movie service
- Spring Cloud Gateway
- PostgreSQL database

## Run locally

Backend-only:

```bash
docker compose -f docker-compose.backend.yml up --build
```

Full stack:

```bash
docker compose -f docker-compose.fullstack.yml up --build
```

## Deployment docs

See `DEPLOYMENT.md` for full-stack deployment instructions and `BACKEND_DEPLOYMENT.md` for backend deployment details.
