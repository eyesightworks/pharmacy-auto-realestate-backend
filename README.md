# EyesightWorks Real Estate Backend System

A production-ready full-stack backend platform built with **NestJS**, **TypeScript**, **Prisma ORM**, **PostgreSQL**, **Cloudinary**, and **JWT Authentication**.

This project demonstrates a complete backend engineering workflow including authentication, authorization, image uploads, database management, RESTful APIs, role-based access control, and scalable modular architecture.

---

# System Architecture

<img src="image/backennd.png" alt="EyesightWorks Backend Architecture">

---

# Live Deployment

### Frontend Application

https://eyesight-realestate.vercel.app/

### Backend API

https://pharmacy-auto-realestate-backend.onrender.com/api

---

# Project Overview

This platform supports multiple business domains through a modular architecture:

* Real Estate Management
* Property Listing Platforms
* Vehicle Listings
* Pharmacy Product Management
* Booking Systems
* User Management
* Admin Dashboard Operations
* Media Upload Management

The backend was designed for scalability, maintainability, and production deployment using modern backend engineering practices.

---

# Key Achievements

* Built a modular NestJS backend from scratch
* Integrated PostgreSQL with Prisma ORM
* Implemented JWT Authentication and Authorization
* Developed Role-Based Access Control (RBAC)
* Created secure RESTful APIs
* Integrated Cloudinary for media management
* Built Admin Dashboard upload workflow
* Implemented full CRUD operations
* Added AI Property Description Generation Module
* Connected frontend applications to backend services
* Deployed production-ready applications on Render and Vercel

---

# Core Features

### Authentication & Security

* JWT Authentication
* Role-Based Access Control (RBAC)
* Protected API Routes
* Secure Environment Variables
* Authentication Guards

### Database Management

* PostgreSQL Database
* Prisma ORM
* Database Relationships
* Data Validation
* Query Optimization

### Media Management

* Cloudinary Integration
* Image Upload Workflow
* Dynamic Media Storage
* Secure Upload Signatures

### Business Modules

#### Real Estate

* Create Properties
* Update Properties
* Delete Properties
* Property Listings
* Property Images

#### Automobile

* Vehicle Management
* Vehicle Listings
* Vehicle Image Uploads

#### Pharmacy

* Product Management
* Product Listings
* Product Image Uploads

### AI Integration

* AI Description Generation Module
* OpenAI SDK Integration
* Automated Property Description Workflow

### Developer Features

* Modular Architecture
* Error Handling
* Request Validation
* Structured Logging
* RESTful API Design

---

# Tech Stack

## Backend

* NestJS
* Node.js
* TypeScript

## Database

* PostgreSQL
* Prisma ORM
* Neon Database

## Authentication

* JWT Authentication
* RBAC Authorization

## Cloud Services

* Cloudinary
* Render

## Frontend

* Next.js
* React
* TypeScript
* Tailwind CSS

## Development Tools

* Thunder Client
* Git
* GitHub
* VS Code

---

# API Modules

| Module     | Description                     |
| ---------- | ------------------------------- |
| Auth       | Authentication & Login          |
| Users      | User Management                 |
| Properties | Real Estate Listings            |
| Vehicles   | Vehicle Listings                |
| Products   | Pharmacy Products               |
| Cloudinary | Media Upload Service            |
| AI         | Property Description Generation |

---

# Project Structure

```bash
src/
├── modules/
│   ├── auth/
│   ├── users/
│   ├── real-estate/
│   │   └── properties/
│   ├── automobile/
│   │   └── vehicles/
│   ├── pharmacy/
│   │   └── products/
│   ├── cloudinary/
│   └── ai/
│
├── database/
│   ├── prisma.module.ts
│   └── prisma.service.ts
│
├── common/
│
├── app.module.ts
└── main.ts
```

---

# Architecture Highlights

* Modular NestJS Architecture
* PostgreSQL + Prisma ORM
* JWT Protected APIs
* Cloudinary Media Workflow
* Admin Dashboard Integration
* Multi-Domain Business Logic
* Production Deployment Pipeline
* AI Service Integration

---

# Screenshot Evidence

The architecture screenshot demonstrates:

* Authenticated API Requests
* JWT Protected Routes
* Successful CRUD Operations
* NestJS Server Logs
* PostgreSQL Persistence
* Prisma ORM Integration
* Admin Dashboard Authentication
* Cloudinary Upload Workflow
* End-to-End Full-Stack Architecture

---

# Author

**EyesightWorks**

Backend Engineer | Full-Stack Developer

Technologies:
NestJS • PostgreSQL • Prisma ORM • TypeScript • JWT • Cloudinary • Next.js • React
