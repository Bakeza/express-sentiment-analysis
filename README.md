# Example Project

This is a simple web application demonstrating the use of Express.js for server-side functionality and Webpack for client-side bundling. The application allows users to enter a URL, which is then analyzed for sentiment using the MeaningCloud API.

## Table of Contents

- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Key Files](#key-files)
- [Scripts](#scripts)
- [Technologies](#technologies)


## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Setup

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Bakeza/express-sentiment-analysis.git
   cd express-sentiment-analysis
    ```
2. **Install dependencies:**

   ```bash
   npm install
    ```
3. **Create a `.env` file:**

    Create a .env file in the root directory and add your MeaningCloud API key:
   ```bash
   API_KEY=your_meaningcloud_api_key
    ```

## Usage
### Running the Development Build

To start the development server, run:

```bash
npm run build-dev
```

This will start a development server on `http://localhost:3000` and open the app in your default browser. Webpack's development server will watch for changes and automatically reload the page.

### Running the Production Build
To create a production build, run:

```bash
npm run build-prod
```
This will generate optimized files in the `dist` directory.

### Running the Express Server
To start the Express server, run:

```bash
npm start
```

This will start the server on `http://localhost:8000`.


## Key Files:
- `src/client/js/formHandler.js`: Handles form submission and interacts with the server.
- `src/client/js/nameChecker.js`: Contains a function to check for captain names.
- `src/server/index.js`: Express server that processes incoming requests and interacts with the MeaningCloud API.
- `src/client/styles/`: Contains SCSS files for styling the application.
- `src/client/views/index.html`: The main HTML file for the client-side application.

## Scripts
- `npm start`: Starts the Express server.
- `npm run build-dev`: Runs the development build with Webpack and starts the development server.
- `npm run build-prod`: Creates a production build with Webpack.
- `npm test`: Runs unit tests with Jest.

## Technologies
- **Node.js**: Server-side JavaScript runtime.
- **Express.js**: Web framework for Node.js.
- **Webpack**: Module bundler for JavaScript.
- **SCSS**: CSS preprocessor for more flexible and maintainable styles.
- **MeaningCloud API**: External API used for sentiment analysis.
- **Jest**: JavaScript testing framework.