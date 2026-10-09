# ShoLink - Project Plan

## Product Backlog

### User Stories

| ID | User Story | Priority | Story Points |
|----|------------|----------|--------------|
| 1 | As a **developer**, I want to **set up PostgreSQL database with Prisma** so that **URL mappings can be stored** | High | 5 |
| 2 | As a **developer**, I want to **generate unique short codes** so that **each URL has a unique identifier** | High | 3 |
| 3 | As a **developer**, I want to **create an API endpoint to shorten URLs** so that **clients can submit URLs and receive short codes** | High | 5 |
| 4 | As a **developer**, I want to **create an API endpoint for redirection** so that **users are redirected to original URLs** | High | 5 |
| 5 | As a **developer**, I want to **validate incoming URLs** so that **only valid URLs are processed** | Medium | 3 |
| 6 | As a **developer**, I want to **implement error handling** so that **the API returns meaningful responses** | Medium | 3 |

---

## Story Details

### 1: Database Setup with Prisma
**Acceptance Criteria:**
- PostgreSQL database connection configured
- Prisma schema defines URL model with fields: id, originalUrl, shortCode, createdAt
- Database migrations applied successfully

**Technical Notes:**
- Install prisma and @prisma/client
- Create schema.prisma with URL model
- Run `npx prisma migrate dev`
- Use .env for DATABASE_URL

---

### 2: Unique Short Code Generation
**Acceptance Criteria:**
- Generates 6-character alphanumeric codes
- Checks database for uniqueness
- No special characters in codes

**Technical Notes:**
- Use nanoid or crypto.randomBytes
- Character set: [a-zA-Z0-9]
- Store with unique constraint

---

### US-003: Create Shortened URL API
**Acceptance Criteria:**
- POST /api/shorten accepts JSON with url field
- Returns JSON with shortCode and shortUrl
- Stores mapping in database

**Technical Notes:**
- Request: `{ "url": "https://example.com" }`
- Response: `{ "shortCode": "abc123", "shortUrl": "http://localhost:3000/abc123" }`
- Return 201 Created

---

### US-004: Redirect API
**Acceptance Criteria:**
- GET /:shortCode redirects to original URL
- Returns 301 redirect status
- Returns 404 if shortCode not found

**Technical Notes:**
- Query database with Prisma
- Use `res.redirect(301, originalUrl)`
- Handle missing codes gracefully

---

### US-005: URL Validation
**Acceptance Criteria:**
- Validates URL format before processing
- Rejects invalid URLs with 400 status
- Checks for http/https protocol

**Technical Notes:**
- Use validator library
- Return error: `{ "error": "Invalid URL" }`

---

### US-006: Error Handling
**Acceptance Criteria:**
- All endpoints return consistent error format
- Database errors are caught
- Server errors return 500 status

**Technical Notes:**
- Implement Express error middleware
- Format: `{ "error": "message", "statusCode": 400 }`
- Log errors to console

---

## Story Point Scale
- **3 points:** Simple, 1 day
- **5 points:** Moderate, 2 days

## Priority Definitions
- **High:** Must have for MVP
- **Medium:** Should have for complete solution

## Sprint Plan

**Sprint 1:**
- US-001: Database Setup
- US-002: Short Code Generation
- US-003: Create Shortened URL API

**Sprint 2:**
- US-004: Redirect API
- US-005: URL Validation
- US-006: Error Handling
