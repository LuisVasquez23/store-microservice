# store-microservice - Microservices Architecture with API Gateway

## Overview

This repository contains a microservices architecture for a store application, implemented using Node.js. It includes the following services:

- **API Gateway**: Handles routing and acts as a reverse proxy to the underlying microservices.
- **Product Service**: Manages product-related operations and interacts with a MySQL database.
- **User Service**: Handles user-related operations and interacts with a MySQL database.

The services are orchestrated using Docker Compose, with a MySQL database for persistence.

## Features

- **API Gateway**: Uses `http-proxy-middleware` to route requests to the appropriate microservice.
- **Product Service**: Implements CRUD operations for products using Sequelize with MySQL.
- **User Service**: Manages user data and authentication using Sequelize with MySQL.
- **MySQL Database**: Provides storage for user and product data.
- **Docker Compose**: Orchestrates the services and manages their dependencies.

## Setup and Running

1. **Clone the repository**:
    ```bash
    git clone https://github.com/LuisVasquez23/store-microservice.git
    cd store-microservice
    ```

2. **Build and start the services**:
    ```bash
    docker-compose up --build
    ```

3. **Access the services**:
    - **API Gateway**: `http://localhost:3000`
    - **User Service**: `http://localhost:3001`
    - **Product Service**: `http://localhost:3002`

4. **Explore the API**:
    The API can be tested using tools like Postman or through Swagger if documentation is integrated.

## Contribution

Contributions are welcome! Please open an issue or submit a pull request for any changes or improvements.
