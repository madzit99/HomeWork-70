import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="row">
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-success">
          <div className="container w-50">
            <NavLink to={"/"} className="navbar-brand">
              Контакты
            </NavLink>
            <NavLink to={"/add-new"} className="nav-item nav-link text-white">
              Добавить Контакт
            </NavLink>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
