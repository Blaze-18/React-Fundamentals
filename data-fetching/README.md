# React API Fetching Methods

## Introduction

This project demonstrates four different methods for fetching data from an API in a React application. The methods used are:

1. **Fetch API** - The native browser API for making HTTP requests.
2. **Axios** - A popular promise-based HTTP client for the browser and Node.js.
3. **SWR (Stale-While-Revalidate)** - A React Hooks library for data fetching with caching and revalidation.
4. **React Query** - A powerful data-fetching and caching library for React.

## Project Overview

This project is a simple quote-fetching application that allows users to fetch random quotes from an external API using each of the four methods. It serves as a practical comparison between the different data-fetching approaches in React.

## Tech Stack

* React (with Vite)
* TypeScript
* Axios
* SWR
* React Query

## Features

* Fetches random quotes using four different methods.
* Clear UI showing the current fetching method.
* Error handling for each method.
* Loading indicators for each method.
* Code is organized for easy understanding and extension.

## Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
```

2. Navigate to the project directory:

```bash
cd react-api-fetching-methods
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

## Usage

* The app provides buttons for each of the four methods.
* Clicking any button will fetch a random quote using the respective method.

## Comparing Methods

| Method      | Advantages                                  | Disadvantages                     |
| ----------- | ------------------------------------------- | --------------------------------- |
| Fetch       | Built-in, lightweight                       | Manual error handling and caching |
| Axios       | Simple, supports interceptors, customizable | Slightly larger bundle size       |
| SWR         | Automatic caching and revalidation          | More complexity for beginners     |
| React Query | Powerful caching and background updates     | Slightly larger bundle size       |

## Best Use Cases

* **Fetch API:** When you need a lightweight and straightforward solution.
* **Axios:** When you want more customization and cleaner syntax.
* **SWR:** When you need automatic caching with minimal setup.
* **React Query:** When working with complex data-fetching logic and caching.

## License

This project is licensed under the MIT License.

## Acknowledgements

* React Documentation
* Axios Documentation
* SWR Documentation
* React Query Documentation
