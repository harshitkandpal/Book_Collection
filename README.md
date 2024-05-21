# Book_Collection

## Overview
This project consists of a client and a server. The client is built using Vite and React, while the server is built using Node.js. The application features authentication for an admin user and includes various functionalities such as viewing, adding, editing, and deleting books.

## Table of Contents
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Installation

### Client Setup
Navigate to the client directory and install dependencies:
```bash
cd client
npm install
```

### Server Setup
Navigate to the server directory and install dependencies:
```bash
cd server
npm install
```

## Running the Application

### Running the Client
To start the client, navigate to the client directory and run:
```bash
npm run dev
```
The client will be running at `http://localhost:5173`.

### Running the Server
To start the server, navigate to the server directory and run:
```bash
npm start
```
The server will be running at `http://localhost:3001`.

### Environment Variables
Create a `.env` file in the `server` directory and add the following:
```
PORT = 3001
URL = "mongodb://127.0.0.1:27017/bookCollection"
Admin_key = "admin-key"
```
### username: admin
### password: adminpassword
