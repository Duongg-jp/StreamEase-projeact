import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/image/—Pngtree—planting trees_1014361.png";
export default function Header() {
  const transparentNavbar = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(10px)",
  };
  const navItem = {
    textDecoration: "none",
    color: "#000",
    fontSize: "18px",
    display: "block",
    padding: "6px 12px",
    letterSpacing: "1px",
    // textTransform: 'uppercase',
  };

  return (
    <div className="" style={{ height: "100px" }}>
      <nav
        style={transparentNavbar}
        className="navbar navbar-expand-lg navbar-light bg-light fixed-top transparent-navbar"
      >
        <div className="container">
          <img src={Logo} className="" width={80} />

          <NavLink to="/" className="navbar-brand fs-1" href="#">
            Plant
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse fs-4" id="navbarNav">
            <ul className="navbar-nav mx-auto gap-5">
              <li className="nav-item">
                <p className="nav-p" href="#">
                  Shop
                </p>
              </li>
              <li className="nav-item dropdown">
                <p
                  className=" dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Handbook
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Knowledge
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Technique
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Experience
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Design ideas for bonsai
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <NavLink  className="nav-p" href="#">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <p className="nav-p" href="#">
                  Feedback
                </p>
              </li>
            </ul>
          </div>

          <div className="d-flex">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="You want to find a tree?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
