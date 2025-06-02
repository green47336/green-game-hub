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
| Vite                                           | Build tool                                |

---

- The requests are now sent to a proxy server to hide my API key, thus trying this out locally won't really work. The proxy expects all requests to come from the deployed domain.

- This project expands upon Mosh Hamedani's React 18 + TypeScript course: https://codewithmosh.com/
