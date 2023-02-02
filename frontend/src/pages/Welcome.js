import React from "react";
import { Link } from "react-router-dom";

function Welcome() {
  return (
    <div className="container">
      <div className="d-flex align-items-center" style={{ height: "100vh" }}>
        <div style={{ width: "100%" }}>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card border-dark">
                <div className="card-header border-dark">Welcome</div>
                <div className="card-body">
                  <h5>Laravel JWT + React</h5>
                  <p>
                    Implementasi Json Web Token menggunakan Laravel dan consume
                    token dengan React.
                  </p>
                  <Link
                    to="/login"
                    className="btn btn-primary border-dark me-2"
                  >
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-primary border-dark">
                    Register
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
