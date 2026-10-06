## Development Journal & Architecture Log

### Phase 1: Foundation & Backend Setup (October 6, 2026)
* **Monorepo Structure:** Established a clean separation of concerns with root-level directories for `FRONTEND/` and `BACKEND/`, utilizing a single master Git repository.
* **Backend Initialization:** 
  * Initialized Node.js with Express, CORS, and `dotenv`.
  * Integrated **MongoDB Atlas** for cloud database persistence.
  * Configured environment management via `.env` files and secured repositories using dedicated `.gitignore` files for both frontend and backend.
* **Development Workflow:** Configured hot-reloading with `nodemon` via `npm run dev`.