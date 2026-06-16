from sqlalchemy.orm import Session
from models import Employee


def create_employee(db: Session, data):

    emp = Employee(
        name=data.name,
        email=data.email,
        department=data.department
    )

    db.add(emp)

    db.commit()

    db.refresh(emp)

    return emp


def get_all(db: Session):

    return db.query(
        Employee
    ).all()


def update_employee(
db: Session,
id: int,
data
):

    emp = (
        db.query(Employee)
        .filter(
            Employee.id == id
        )
        .first()
    )

    if emp:

        emp.name = data.name
        emp.email = data.email
        emp.department = data.department

        db.commit()

        db.refresh(emp)

    return emp


def delete_employee(
db: Session,
id: int
):

    emp = (
        db.query(Employee)
        .filter(
            Employee.id == id
        )
        .first()
    )

    if emp:

        db.delete(emp)

        db.commit()

    return