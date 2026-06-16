from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker,declarative_base
# instead of  password need your database pasword and instead of db_Name  you need to mentioned your database_name which you created in local like eployee_db
DATABASE_URL="mysql+pymysql://root:password@localhost/employee_db"

engine=create_engine(DATABASE_URL)

SessionLocal=sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base=declarative_base()


def get_db():
    db=SessionLocal()

    try:
        yield db

    finally:
        db.close()