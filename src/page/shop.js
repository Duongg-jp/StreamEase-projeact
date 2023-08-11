import React, { useState } from "react";
import dummyData from "../dummyData";
import Card from "../component/Card";
import CssBtImg from "../assets/bt-img.css";

export default function ShoppPage() {
  const [listProducts, setListProducts] = useState(dummyData.listData);
  const [filteredType, setFilteredType] = useState(null);

  const handleFilterClick = (type) => {
    if (type === filteredType) {
      setFilteredType(null);
    } else {
      setFilteredType(type);
    }
  };

  const listMatchData = filteredType
    ? listProducts.filter((o) => o.type === filteredType)
    : listProducts;

    

  return (
    <>
      {/* button */}
      <div style={CssBtImg} className="mt-5">
      <button
          onClick={() => handleFilterClick("null")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === null ? "active" : ""
          }`}
        >
        All
        </button>
      <button
          onClick={() => handleFilterClick("Thai Lizard")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Thai Lizard" ? "active" : ""
          }`}
        >
        cây Thằn lằn Thái
        </button>
      <button
          onClick={() => handleFilterClick("Rose")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Rose" ? "active" : ""
          }`}
        >
          Rose
        </button>
      <button
          onClick={() => handleFilterClick("Hoa mai")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Hoa mai" ? "active" : ""
          }`}
        >
          Mai Vàng
        </button>
      <button
          onClick={() => handleFilterClick("Military Soldiers")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Military Soldiers" ? "active" : ""
          }`}
        >
          Sứ Quân Tử
        </button>
      <button
          onClick={() => handleFilterClick("Confetti")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Confetti" ? "active" : ""
          }`}
        >
          Bông Giấy
        </button>
      <button
          onClick={() => handleFilterClick("the lizard")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "the lizard" ? "active" : ""
          }`}
        >
          cây Thằn Lằn
        </button>
      <button
          onClick={() => handleFilterClick("Cat Dang")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Cat Dang" ? "active" : ""
          }`}
        >
          Cát Đằng
        </button>
      <button
          onClick={() => handleFilterClick("Hong Anh")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Hong Anh" ? "active" : ""
          }`}
        >
          Hồng Anh
        </button>
      <button
          onClick={() => handleFilterClick("Huynh Anh Cam")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Huynh Anh Cam" ? "active" : ""
          }`}
        >
          Huỳnh Anh Cam
        </button>
      <button
          onClick={() => handleFilterClick("Ngoc Nu")}
          style={{ width: "auto" }}
          className={`custom-btn custom-btn-border ${
            filteredType === "Ngoc Nu" ? "active" : ""
          }`}
        >
          Ngọc Nữ
        </button>
      </div>
      <br />
      <br />
      <div className="container">
        <div className="row py-3">
          {listMatchData.map((o) => {
            return (
              <div className="col-12 col-md-3" key={o.id}>
                <Card product={o} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
