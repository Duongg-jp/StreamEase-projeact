import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/image/—Pngtree—planting trees_1014361.png";
import Rose from "../assets/image/rose.png";
import Tho from "../assets/image/tho.png";

import ImgMain from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";


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
             
            </div>
          </div>

          {/* phai */}
          <div className="col-md-6 d-flex flex-column justify-content-between align-items-center">
            <h1>ORNAMENTAL PLANT FOR YOUR HOME</h1>
            <p>
              We design 95% of our products in-house for original style and
              quality you won't find anywhere else.
            </p>
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex flex-row">

              <Link
               className="btn btn-primary ms-5 ">Your cart</Link>
              <button className="btn btn-primary ms-5">More Details</button>
              </div>
              <div className="mt-5 d-flex gap-5">
                <img
                  width={300}
                  src={Rose}
                  alt="Image 1"
                  className="img-fluid"
                />
                <img
                  width={300}
                  src={Tho}
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
