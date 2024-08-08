# Enhanced Drone Fleet Management

This project is a web application for managing a fleet of drones. It has a backend built with Node.js and Express, and a frontend built with React. The frontend is deployed on Vercel, while the backend is deployed on Render using Docker.

## Project Structure

├── backend

│   ├── Dockerfile

│   ├── data.json

│   ├── index.js

├── client

│   ├── public

│   ├── src

│   ├── Dockerfile

│   ├── package.json

│   ├── README.md

├── docker-compose.yml

└── README.md

## Backend

The backend is built with Node.js and Express, providing APIs to manage and fetch data related to drones.

### Prerequisites

- Node.js
- Docker

### Installation

1. Navigate to the backend folder:

**bash**
cd backend


2. Install dependencies:

**bash**
npm install


3. Start the server:

**bash**
node index.js


The backend will be running on `http://localhost:5000`.

### Docker

To build and run the backend Docker container:

1. Build the Docker image:

**bash**
docker build -t drone-backend .


2. Run the Docker container:

**bash**
docker run -p 5000:5000 drone-backend


The backend is also deployed on Render using this Docker image.

## Frontend

The frontend is built with React and uses Axios for API requests. It is styled with Bootstrap.

### Prerequisites

- Node.js
- Docker

### Installation

1. Navigate to the client folder:

**bash**
cd client


2. Install dependencies:

**bash**
npm install

3. Start the development server:

**bash**
npm start


The frontend will be running on `http://localhost:3000`.

### Docker

To build and run the frontend Docker container:

1. Build the Docker image:

**bash**
docker build -t drone-frontend .


2. Run the Docker container:

**bash**
docker run -p 3000:3000 drone-frontend


The frontend is deployed on Vercel at [Enhanced Drone Fleet Management Interface](https://enhanced-drone-fleet-management-interface.vercel.app/).

## Docker Compose

A `docker-compose.yml` file is provided to run both the backend and frontend containers together.

1. Navigate to the root folder:

**bash**
cd ..

2. Run Docker Compose:

**bash**
docker-compose up


## Deployment

### Backend Deployment on Render

The backend is deployed on Render using the Docker image built from the `backend` directory. The deployment can be managed through Render's dashboard.

### Frontend Deployment on Vercel

The frontend is deployed on Vercel. Follow these steps to deploy:

1. Create a new project on Vercel and connect it to the GitHub repository.
2. Set the build and output settings as follows:
   - Build Command: `npm run build`
   - Output Directory: `build`
3. Deploy the project.

## Usage

1. Open the frontend URL: [Enhanced Drone Fleet Management Interface](https://enhanced-drone-fleet-management-interface.vercel.app/)
2. Log in using the credentials provided in `data.json`.
3. Navigate to the dashboard to view and manage the list of drones.
