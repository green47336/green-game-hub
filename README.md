### https://www.green-game-hub.dev/

Front end project for displaying various game data via the [RAWG Video Games Database API](https://api.rawg.io/docs/).

---

| Main Technologies                              | Use                                       |
| ---------------------------------------------- | ----------------------------------------- |
| React 18                                       | Front-end library                         |
| TypeScript                                     | Type safety and tooling                   |
| Chakra UI                                      | UI components and light/dark theme        |
| TanStack Query (formerly known as React Query) | Handling data-fetching                    |
| Zustand                                        | State management                          |
| React Router                                   | Easy routing without refetching data      |
| Vercel                                         | Deployment for front end and proxy server |
| Node.js                                        | JavaScript Runtime                        |
| Vite                                           | Build tool                                |

---

## Local Development Setup

1. **Get a RAWG API Key**: Sign up at [RAWG.io](https://rawg.io/apidocs) for a free API key
2. **Configure Environment**: Copy `.env.example` to `.env.local` and add your API key:
   ```bash
   cp .env.example .env.local
   # Edit .env.local and replace 'your_rawg_api_key_here' with your actual API key
   ```
3. **Install Dependencies**:
   ```bash
   yarn install
   ```
4. **Start Development Server**:
   ```bash
   yarn dev
   ```

## Deployment

- The requests are sent to a proxy server to hide the API key in production. The proxy expects all requests to come from the deployed domain.
- For local development, requests go directly to the RAWG API using your personal API key.

- This project expands upon Mosh Hamedani's React 18 + TypeScript course: https://codewithmosh.com/
