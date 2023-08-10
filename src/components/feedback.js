import React from "react";
import Logo from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";

export default function Feedback() {
  return (
    <>
      <div className="container">
        <div className="row">
          {/* Ảnh */}
          <div className="col-md-6">
            <img src={Logo} alt="Feedback" className="img-fluid" />
          </div>
          {/* Phần thông tin phản hồi */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card text-white bg-success">
                  <div className="card-header">Header 1</div>
                  <div className="card-body">
                    <h5 className="card-title">Success Card 1</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card text-white bg-success">
                  <div className="card-header">Header 2</div>
                  <div className="card-body">
                    <h5 className="card-title">Success Card 2</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card text-white bg-success">
                  <div className="card-header">Header 3</div>
                  <div className="card-body">
                    <h5 className="card-title">Success Card 3</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card text-white bg-success">
                  <div className="card-header">Header 4</div>
                  <div className="card-body">
                    <h5 className="card-title">Success Card 4</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}