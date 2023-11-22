# OpenUPM Installation API

## Overview

This Node.js API provides endpoints for remotely installing and uninstalling openUPM packages on your local machine.

## Requirements

- [Node.js](https://nodejs.org/en/download) installed on your local machine.

## Getting Started

1. Clone the repository:

The easiest way to do this is with the use of Github desktop, however, you can also just copy and paste the index.js code into your own visual studio project.

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the API server:

   ```bash
   node index.js
   ```

   The API server will run at `http://localhost:3000` by default.

## API Endpoints

### Install openUPM Package

- **Endpoint:** `GET /install-openupm`
- **Description:** Installs the openUPM CLI globally on your local machine.
- **Example:** ( You can copy paste this into your browser )

  ```bash
  http://localhost:3000/install-openupm
  ```

### Uninstall openUPM Package

- **Endpoint:** `GET /uninstall-openupm`
- **Description:** Uninstalls the openUPM CLI globally from your local machine.
- **Example:** ( You can copy paste this into your browser )

  ```bash
  http://localhost:3000/uninstall-openupm
  ```

## Contributing

If you would like to contribute to this project, please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under MIT - see the [LICENSE.md](LICENSE.md) file for details.
