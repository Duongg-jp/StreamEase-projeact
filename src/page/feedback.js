import React, { useState } from "react";
import ImgMain from "../assets/image/—Pngtree—potted watercolor cactus flowering plant_6417442.png";

export default function FeedbackForm() {
  return (
    <div className="vh-100">
      <h1 className="text-center text-white">Tell us what you feel</h1>

      <div className="row mx-0">
        <div className="col-12 col-md-6">
          <form
            className="row mx-auto g-3 container"
            style={{ marginTop: "120px" }}
          >
            <div className="col-12">
              <label for="inputEmail4" className="form-label text-white"></label>
              <input
                required
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
              />
            </div>
            <div className="col-12">
              <textarea
                type="text"
                className="form-control"
                id="autoSizingInput"
                rows={4}
                placeholder="Leave your message here"
              ></textarea>
            </div>

            <div className="col-12">
              <button type="submit" className="btn btn-primary d-block w-100">
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-6">
          <img src={ImgMain} className="" width={500} />
        </div>
      </div>
    </div>
  );
}
