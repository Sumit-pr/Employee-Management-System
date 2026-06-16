import "./index.css";
import Header from "./components/Header";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function App() {
  return (
    <>
      <Header />

      <div className="container">
        <div className="card">
          <EmployeeForm />
        </div>

        <div className="card">
          <EmployeeList />
        </div>
      </div>
    </>
  );
}

export default App;