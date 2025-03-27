# URL Shortener with Fastify and PostgreSQL

This is a simple URL shortener service built using Fastify and PostgreSQL.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/ErfanAbedinpour/URLShorter.git .
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Configuration. fill them
```sh
    cp .env.example .env
```

4. Copy content in migration/url-table.sql and Execute them into Your Postgres Database.

## Running the Application

Start the Fastify server:
```sh
pnpm start
```

## Installation Using Docker
1. Clone Repository
```sh
   git clone https://github.com/ErfanAbedinpour/URLShorter.git .
   ```

2. Configuration. fill them
```sh
    cp .env.example .env
```
3. Run docker
```sh
docker compose up
```
4. Migration: Copy migration/url-table.sql Content and connect to Database and execute them

## API Endpoints

### Shorten a URL
**Request:**
```http
POST http://host:port/
```
**Body:**
```json
{
  "url": "https://example.com/long-url"
}
```
**Response:**
```json
{
  "shortUrl": "http://host:port/abc123"
}
```

### Redirect to Original URL
**Request:**
```http
GET http://host:port/{shortUrl}
```
**Response:**
Redirects to the original URL.
