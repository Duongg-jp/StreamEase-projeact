import {  NavLink } from "react-router-dom";
import Logo from "../assets/image/—Pngtree—planting trees_1014361.png";
import "../assets/bt-img.css";
import "./Header.css";
export default function Header() {
  const transparentNavbar = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(10px)",
  };
  const linkWhite = {
    color: "white",
    textDecoration: "none",
  };

  return (
    <div className="" style={{ height: "100px" }}>
      <nav
        style={transparentNavbar}
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top transparent-navbar"
      >
        <div className="container">
          <img src={Logo} className="" width={80} />

          <NavLink to="/" className="navbar-brand  fs-1" href="#">
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
              <li className="nav-item link-white nav-link-effect">
                <NavLink
                  style={linkWhite}
                  to="/shop"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active " : ""
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item nav-link-effect">
                <NavLink
                  style={linkWhite}
                  to="/feedback"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active " : ""
                  }
                >
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item nav-link-effect">
                <NavLink
                  style={linkWhite}
                  to="/contact"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="d-flex ">
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class=" btn btn-light" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
