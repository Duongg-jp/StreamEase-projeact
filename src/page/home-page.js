import React from "react";
import Logo from "../assets/image/—Pngtree—planting trees_1014361.png";
import ImgMain from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";

import Css from "../components/button-hp.css";
import CssBtImg from "../assets/bt-img.css";

export default function HomePage() {
  const imageSection = {
    backgroundImage: `url(${Logo})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div>
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
