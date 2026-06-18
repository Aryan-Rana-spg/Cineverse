# Backend Deployment

This repository uses three Spring Boot services for backend functionality:
- `backend/auth-service`
- `backend/movie-service`
- `backend/api-gateway`

The services are now configured to use environment variables for deployment, including database connection values and service URLs.

## Local Docker deployment

Use Docker Compose to run the full backend stack with PostgreSQL locally.

```bash
docker compose -f docker-compose.backend.yml up --build
```

Then open:
- `http://localhost:8080` for the API gateway
- `http://localhost:8081` for the auth service
- `http://localhost:8082` for the movie service

## Environment variables

### Shared database settings

Set these values for `auth-service` and `movie-service`:

- `SPRING_DATASOURCE_URL` - JDBC URL for PostgreSQL
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `SERVER_PORT`

### API gateway settings

Set these values for `api-gateway`:

- `SERVER_PORT` - port to expose the gateway
- `AUTH_SERVICE_URL` - public or internal auth service URL
- `MOVIE_SERVICE_URL` - public or internal movie service URL
- `FRONTEND_URL` - frontend origin for CORS

## Cloud deployment guidance

### Render / Railway / similar

For each backend service:
- Build command: `./mvnw -B -DskipTests package`
- Start command: `java -jar target/*.jar`
- Set env vars from the service provider

Example service env vars:

#### Auth service
- `SPRING_DATASOURCE_URL=jdbc:postgresql://<db-host>:<db-port>/<db-name>`
- `SPRING_DATASOURCE_USERNAME=<db-user>`
- `SPRING_DATASOURCE_PASSWORD=<db-password>`
- `SERVER_PORT=8081`

#### Movie service
- `SPRING_DATASOURCE_URL=jdbc:postgresql://<db-host>:<db-port>/<db-name>`
- `SPRING_DATASOURCE_USERNAME=<db-user>`
- `SPRING_DATASOURCE_PASSWORD=<db-password>`
- `SERVER_PORT=8082`

#### API gateway
- `SERVER_PORT=8080`
- `AUTH_SERVICE_URL=https://<auth-service-host>`
- `MOVIE_SERVICE_URL=https://<movie-service-host>`
- `FRONTEND_URL=https://<frontend-host>`

## Frontend deployment note

The frontend will need `VITE_API_BASE_URL` set to your gateway hostname, for example:

```env
VITE_API_BASE_URL=https://your-gateway-hostname
```

Then deploy the frontend to Vercel or Netlify and point it at the gateway.
