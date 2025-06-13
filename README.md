# reporting-tool-tetrix

This is a full-stack reporting tool built as part of a take-home assignment from Tetrix. The application allows users to create custom report layouts in a no-code editor format, supporting components like text blocks, tables, and charts.

Key features:

    Frontend: Users can visually compose and save report layouts.

    Backend: Provides APIs to store, retrieve, update, and delete layout configurations. Each layout is persistently stored in the database.

    Built with React (frontend) and Python and Django Rest Framework (backend).

The goal is to enable dynamic, interactive report creation with minimal technical complexity for end-users.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Anoop4u777/reporting-tool-tetrix
```

### 2. Set Up Virtual Environment

```bash
# Create virtual environment
python -m venv venv

# Activate virtual environment
# For Windows
venv\Scripts\activate
# For macOS/Linux
source venv/bin/activate
```

### 3. Install Dependencies

```bash
pip install -r requirements.txt
```

### 4. Environment Setup

## Backend

1. Create a `.env` file in the root directory
2. pip install -r requirements.txt

## Frontend

1. npm install

## Run Locally

### 1. Run the Development Server

```bash
cd backend && python manage.py runserver
```

```bash
cd frontend && npm run dev
```

The server will start at `http://127.0.0.1:8000/`

### 2. Access the Admin Panel

Visit `http://127.0.0.1:8000/admin` to access the Django admin panel.

### 3. API Documentation

The API endpoints will be available at `http://localhost:8000/`

### 4. Frontend Documentation

The Frontend endpoints will be available at `http://localhost:5173/`

## Tech Stack

**Backend:** Python, Django, Django Rest Framework

**Frontend:** JavaScript, React

**Database:** MySQL

## Author

- [@Anoop Krishnan Ramachandran](https://github.com/Anoop4u777)
