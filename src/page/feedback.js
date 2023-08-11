import React, { useState } from "react";

export default function FeedbackForm() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="text-center">
        <h1>Please give us feedback</h1>
        <br />
        <br />
        <br />
        <form class="row row-cols-lg-auto g-3 container">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input type="email" class="form-control" id="inputEmail4" placeholder="Email"/>

          <div class="col-12">
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Feelback"
            />
          </div>

          <div class="col-12">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="inlineFormCheck"
              />
            </div>
          </div>

          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
