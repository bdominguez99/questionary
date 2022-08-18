import { Link } from "react-router-dom";

import Modal from "./Modal";

const Navbar = ({ children }) => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            ESCOMplicado
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar"
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Encuestas
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/student">
                      Alumnos
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/teacher">
                      Profesores
                    </Link>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/graduated">
                      Egresados
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container p-4" style={{ backgroundColor: "#eeeeee" }}>
        {children}
      </div>
      <Modal type="teacherModal" />
    </>
  );
};
export default Navbar;
