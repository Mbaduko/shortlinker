# ShoLink
ShoLink is a lab project completed as part of the **Agile and DevOps Practices** module at **AmaliTech Apprenticeship.**

It demonstrates the application of Agile and DevOps practices to build a URL shortener service.

## Development Stack
This project is built with the following tools:

- **Node.js** with **TypeScript**
- **Express.js**
- **PostgreSQL**
- **Prisma ORM**
- **Swagger** for API documentation

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- PostgreSQL database

### Installation

1. Clone the repository
```bash
git clone https://github.com/Mbaduko/shortlinker.git
cd shortlinker
```

2. Install dependencies
```bash
npm install
```

3. Configure environment variables
Create a `.env` file in the root directory:
```env
PORT=3000
DATABASE_URL="postgresql://user:password@localhost:5432/sholink?schema=public"
```

### Running the Application

**Development mode:**
```bash
npm run dev
```

**Build for production:**
```bash
npm run build
```

**Start production server:**
```bash
npm start
```

### API Documentation

Once the server is running, access the Swagger documentation at:
```
http://localhost:3000/api-docs
```

### Available Endpoints

- `GET /health` - Health check endpoint
- `GET /api-docs` - Swagger API documentation

## Project Structure

```
.
├── src/
│   └── index.ts        # Main application file
├── dist/               # Compiled TypeScript output
├── .env                # Environment variables
├── tsconfig.json       # TypeScript configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```