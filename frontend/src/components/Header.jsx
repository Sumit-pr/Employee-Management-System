import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1>🏢 Employee Management System</h1>

        <div className="header-right">
          <span>Admin Panel</span>
        </div>
      </div>
    </header>
  );
}

export default Header;