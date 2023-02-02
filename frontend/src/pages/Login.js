import React from "react";

function Login() {
  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
          <div style={{ width: "100%" }}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Login</div>
                  <div className="card-body">
                    <form>
                      <div className="mb-3 mt-3">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          name="password"
                          placeholder="Password"
                        />
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Masuk
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
