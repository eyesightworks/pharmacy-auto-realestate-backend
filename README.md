# Pharmacy Auto Real Estate Backend

A scalable backend API system built with NestJS, TypeScript, and PostgreSQL for managing pharmacy services, automobile operations, and real estate data.

## Features

* RESTful API architecture
* Authentication and authorization
* PostgreSQL database integration
* Modular backend structure
* CRUD operations
* Scalable server-side design

## Tech Stack

* NestJS
* TypeScript
* Node.js
* PostgreSQL
* JWT Authentication

## Installation

```bash
git clone https://github.com/eyesightworks/pharmacy-auto-realestate-backend.git
```

```bash
cd pharmacy-auto-realestate-backend
```

```bash
npm install
```

## Running the Application

### Development

```bash
npm run start:dev
```

### Production

```bash
npm run start:prod
```

## Environment Variables

Create a `.env` file and add:

```env
PORT=4000
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
```

## API Modules

* Authentication
* Users
* Pharmacy
* Automobile
* Real Estate

## Project Structure

```text
src/
 ├── auth/
 ├── users/
 ├── pharmacy/
 ├── automobile/
 ├── realestate/
 └── main.ts
```

## Author

Alawode Adewale Afeez

GitHub:
https://github.com/eyesightworks
