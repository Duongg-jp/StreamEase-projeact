import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/image/—Pngtree—planting trees_1014361.png";
import ImgMain from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";

import Css from "../components/button-hp.css";
import CssBtImg from "../assets/bt-img.css";

export default function HomePage(params) {
  const transparentNavbar = {
    backgroundColor: "rgba(0, 0, 0, 0)",
    backdropFilter: "blur(10px)",
  };
  const imageSection = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div>
      <div className="" style={{ height: "100px" }}>
        <nav
          style={transparentNavbar}
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top transparent-navbar"
        >
          <div className="container">
            <img src={Logo} className="" width={80} />

            <p className="navbar-brand fs-1" href="#">
              Plant
            </p>

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
                  <p className="nav-p" href="#">
                    Contact
                  </p>
                </li>
                <li className="nav-item">
                  <p className="nav-p" href="#">
                    Feedback
                  </p>
                </li>
              </ul>
            </div>

            <div className="d-flex">
              {/* <button className="btn btn-outline-primary" type="button">
              Login
            </button> */}
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

      <div className="container custom-height mh-200 py-4">
        <div className="row">
          {/* trai */}
          <div className="col-md-6">
            <div className="d-flex flex-column justify-content-center align-items-center h-100">
              <div className="collum">
                <img src={ImgMain} className="" width={500} />
              </div>
              {/* button */}
              <div style={CssBtImg} className="mt-5">
                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Sale
                </button>
                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Top
                </button>
                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Beautyful
                </button>

                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Rose
                </button>

                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Cactus
                </button>

                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Sapling
                </button>

                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Seeds
                </button>

                <button
                  style={{ width: "auto" }}
                  className="custom-btn custom-btn-border"
                >
                  Fruit trees
                </button>
              </div>
            </div>
          </div>

          {/* phai */}
          <div className="col-md-6">
            <h1>ORNAMENTAL PLANT FOR YOUR HOME</h1>
            <p>
              We design 95% of our products in-house for original style and
              quality you won't find anywhere else.
            </p>
            <div className="">
              <button style={Css} className="btn ms-5">
                Go to Shop
              </button>
              <p className="btn btn-primary ms-5">More Details</p>
              <div className="mt-3 d-flex ">
                <img
                  width={300}
                  src={Logo}
                  alt="Image 1"
                  className="img-fluid me-3"
                />
                <img
                  width={300}
                  src={Logo}
                  alt="Image 2"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
