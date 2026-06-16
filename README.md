# Employee Management System

A full-stack Employee Management System built using **React.js**, **FastAPI**, and **MySQL** that allows users to perform CRUD (Create, Read, Update, Delete) operations on employee records.

## Features

* Add new employees
* View all employees
* Update employee details
* Delete employees
* Responsive user interface
* FastAPI REST API backend
* MySQL database integration
* CORS enabled for frontend-backend communication

## Tech Stack

### Frontend

* React.js
* Vite
* Axios
* CSS

### Backend

* FastAPI
* SQLAlchemy
* Pydantic
* Uvicorn

### Database

* MySQL

## Project Structure

```
EmployeeManagement/
│
├── backend/
│   ├── crud.py
│   ├── database.py
│   ├── main.py
│   ├── models.py
│   └── schemas.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/your-username/EmployeeManagement.git
```

### Backend Setup

```bash
cd backend

pip install fastapi
pip install uvicorn
pip install sqlalchemy
pip install pymysql
```

Run the backend:

```bash
uvicorn main:app --reload
```

Backend URL:

```
http://127.0.0.1:8000
```

API Documentation:

```
http://127.0.0.1:8000/docs
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL:

```
http://localhost:5173
```

## Database

Create a MySQL database:

```sql
CREATE DATABASE employee_db;
```

Update your database credentials in `database.py` before running the application.

## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | /employees      | Get all employees |
| POST   | /employees      | Add employee      |
| PUT    | /employees/{id} | Update employee   |
| DELETE | /employees/{id} | Delete employee   |

## Future Enhancements

* Search employees
* Dashboard with statistics
* Pagination
* Authentication
* Export to Excel/PDF
* Dark mode

## Author

**Sumit Ojha**

Full Stack Developer | React | FastAPI | MySQL | Python | UiPath

## License

This project is for learning and portfolio purposes.

