# ShoLink - Project Plan

## Product Backlog

### User Stories

| ID | User Story | Priority | Story Points |
|----|------------|----------|--------------|
| 1 | As a **user**, I want to **submit a long URL and receive a shortened version** so that **I can easily share it** | High | 5 |
| 2 | As a **user**, I want to **click on a shortened URL and be redirected to the original website** so that **I can access the content quickly** | High | 5 |
| 3 | As a **user**, I want to **receive an error message when I submit an invalid URL** so that **I know what went wrong** | Medium | 3 |
| 4 | As a **user**, I want **shortened URLs to be unique** so that **they don't conflict with each other** | High | 3 |
| 5 | As a **user**, I want **the service to work reliably** so that **my shortened URLs are always accessible** | High | 5 |
| 6 | As a **user**, I want **clear error messages when something goes wrong** so that **I understand what happened** | Medium | 3 |

---

## Story Details

### 1: Submit URL and Get Shortened Version
**Acceptance Criteria:**
- User sends a POST request to /api/shorten with a URL
- System returns a shortened URL
- Original URL is stored in database with unique short code

---

### 2: Redirect to Original URL
**Acceptance Criteria:**
- User visits shortened URL (e.g., http://localhost:3000/abc123)
- System redirects to original URL
- Redirect happens quickly (under 100ms)

---

### 3: Receive Error for Invalid URLs
**Acceptance Criteria:**
- User submits invalid URL and receives error message
- Error response includes description of the problem
- Invalid formats are rejected (missing protocol, malformed URLs)

---

### 4: Unique Short Codes
**Acceptance Criteria:**
- Each shortened URL has a unique identifier
- No two URLs share the same short code
- System handles collision if duplicate generated

---

### 5: Reliable Service
**Acceptance Criteria:**
- Database connection is stable
- Shortened URLs persist across server restarts
- Service handles concurrent requests properly

---

### 6: Clear Error Messages
**Acceptance Criteria:**
- All errors return consistent JSON format
- Server errors don't expose sensitive information
- Different error types have appropriate status codes

---

## Priority Definitions
- **High:** Must have for MVP
- **Medium:** Should have for complete solution

---

## Definition of Done (DoD)

A user story is considered complete when:

1. **All acceptance criteria are satisfied** - Every acceptance criterion defined in the user story has been met and verified
2. **Relevant automated tests have been written and pass** - Unit tests, integration tests, and API tests are implemented and passing
3. **The code follows the project's coding conventions** - Code adheres to established style guides and best practices
4. **Changes have been committed to Git with meaningful commit messages** - All code is versioned with clear, descriptive commit messages
5. **The CI pipeline passes** - Continuous Integration pipeline runs successfully without errors
6. **Relevant documentation has been updated** - API documentation, README, or other relevant docs reflect the changes

---

## Sprint Backlog

### Sprint Goal
Deliver a working URL shortening service that can shorten URLs and redirect users to original destinations.

### Selected User Stories for Sprint
- Story 1: Submit URL and Get Shortened Version (5 points)
- Story 2: Redirect to Original URL (5 points)
- Story 5: Reliable Service (5 points)

**Total Story Points:** 15

---

## Sprint Tasks

### Task 1: Set Up Database and Project Infrastructure
**Related Stories:** 5, 1, 2  
**Assigned To:** _____

**Task Description:**
Set up the PostgreSQL database with Prisma ORM and configure the project structure.

**Subtasks:**
- Initialize Node.js project with Express.js
- Install dependencies (express, prisma, @prisma/client, dotenv)
- Configure PostgreSQL database connection
- Create Prisma schema with URL model (id, originalUrl, shortCode, createdAt)
- Run database migrations
- Set up environment variables in .env file
- Create basic Express server structure

---

### Task 2: Implement URL Shortening Endpoint
**Related Stories:** 1, 4  
**Assigned To:** _____

**Task Description:**
Create the API endpoint that accepts long URLs and returns shortened versions.

**Subtasks:**
- Create POST /api/shorten endpoint
- Implement short code generation logic (6-character alphanumeric)
- Add uniqueness check for generated short codes
- Store URL mapping in database using Prisma
- Return JSON response with shortCode and shortUrl
- Write unit tests for short code generation
- Write integration tests for the endpoint

---

### Task 3: Implement URL Redirection Endpoint
**Related Stories:** 2  
**Assigned To:** _____

**Task Description:**
Create the endpoint that redirects users from short URLs to original URLs.

**Subtasks:**
- Create GET /:shortCode endpoint
- Query database for original URL using Prisma
- Implement 301 redirect to original URL
- Handle 404 error for non-existent short codes
- Write integration tests for redirection
- Write tests for error scenarios
