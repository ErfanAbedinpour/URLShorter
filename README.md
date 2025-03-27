# URL Shortener with Fastify and PostgreSQL

This is a simple URL shortener service built using Fastify and PostgreSQL.

## Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd <repo-folder>
   ```

2. Install dependencies:
   ```sh
   pnpm install
   ```

3. Set up your PostgreSQL database and update your connection settings in the project.

4. Run database migrations if needed.

## Running the Application

Start the Fastify server:
```sh
pnpm start
```

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

## License
MIT

