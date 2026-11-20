# SMS Frontend

React 19 + Vite 8 + Tailwind CSS 4 single-page web application.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start the Vite dev server on port 5173 |
| `pnpm build` | Production build into `dist/` |
| `pnpm preview` | Preview the production build |
| `pnpm lint` | Run ESLint |

## Environment

Create a `.env` file and set `VITE_API_URL` if the backend is not running on `http://localhost:5000/api`.

## Structure

- `src/components/` — layouts, shared UI and route guards
- `src/context/` — authentication and theme providers/hooks
- `src/pages/` — route pages grouped by portal (landing, admin, student, faculty, …)
- `src/mock/` — static demo data
- `src/services/` — axios API client
