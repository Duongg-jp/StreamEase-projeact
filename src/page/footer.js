import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";

export default function Footer() {
  return (
    <div className="container height-footer ">
      <div className="row ">
        <div className="col-md-4  text-white">
          <p className="mt-5 d-fex">
            <h3>TECHNIEK</h3>
            <ol class="list-group list-group-numbered">
              <li class="">How does it work?</li>
              <li class="">Products</li>
              <li class="">Projecten</li>
            </ol>
          </p>
        </div>
        <div className="col-4 text-white">
          <h1>Plant</h1>
          <p>
            MEGAWEB WEBSITE DESIGN COMPANY Floor 6 - No. 15, Alley 159 Yen Hoa
            Street, Cau Giay District, Hanoi Tel: 0859.103.103 | Email:
            sale@megaweb.vnMegaweb on Google MapsMegaweb on Google Search
          </p>
        </div>

        <div className=" col-4">
          <img src={Logo} className="" width={50} />

          <p to="/" className="navbar-brand  fs-1" href="#">
            Plant
          </p>
          <img
            width={100}
            src="https://vairen.aien.vn/images/aien-imgs/huongdan.png"
          />
        </div>
      </div>
    </div>
  );
}
