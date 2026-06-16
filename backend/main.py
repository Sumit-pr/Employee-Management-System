from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from fastapi.middleware.cors import CORSMiddleware

from database import get_db, engine
from models import Base
from schemas import EmployeeCreate
from crud import (
create_employee,
get_all,
update_employee,
delete_employee
)

Base.metadata.create_all(
bind=engine
)

app = FastAPI(
    
)


app.add_middleware(
CORSMiddleware,
allow_origins=["*"],
allow_credentials=True,
allow_methods=["*"],
allow_headers=["*"],
)

@app.get("/")
def home():
    return {
        "application": "Employee Management API",
        "version": "1.0.0",
        "status": "Running Successfully",
        "developer": "Sumit Ojha",
        "documentation": "/docs",
        "employees_api": "/employees"
    }

@app.post("/employees")
def create(
employee: EmployeeCreate,
db: Session = Depends(get_db)
):

    return create_employee(
        db,
        employee
    )


@app.get("/employees")
def read(
db: Session = Depends(get_db)
):

    return get_all(db)


@app.put("/employees/{id}")
def update(
id: int,
employee: EmployeeCreate,
db: Session = Depends(get_db)
):

    return update_employee(
        db,
        id,
        employee
    )


@app.delete("/employees/{id}")
def delete(
id: int,
db: Session = Depends(get_db)
):

    delete_employee(
        db,
        id
    )

    return {
        "success": True,
        "message": f"Employee with ID {id} deleted successfully"
    }