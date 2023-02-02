import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  // state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // validation
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  // agar user yang login gabisa ke sini
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/home");
    }
  }, []);

  const loginHandler = async (e) => {
    e.preventDefault();

    // inisialisasi form
    const formData = new FormData();

    formData.append("email", email);
    formData.append("password", password);

    await axios
      .post("http://localhost:8000/api/auth/login", formData)
      .then((response) => {
        console.log(response.data.access_token);
        localStorage.setItem("token", response.data.access_token);

        navigate("/home");
      })
      .catch((error) => {
        console.log(error.response.data);
        setValidation(error.response.data);
      });
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
          <div style={{ width: "100%" }}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <Link to="/" className="btn bg-warning mb-3 border-dark">
                  Back To Home
                </Link>
                <div className="card border-dark">
                  <div className="card-header border-dark">Login</div>
                  <div className="card-body">
                    {validation.error && (
                      <div className="alert alert-danger" role="alert">
                        {validation.error}
                      </div>
                    )}
                    <form onSubmit={loginHandler}>
                      <div className="mb-3 mt-3">
                        <input
                          type="email"
                          className="form-control border-dark"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                        {validation.email && (
                          <small className="text-danger">
                            {validation.email[0]}
                          </small>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control border-dark"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                        {validation.password && (
                          <small className="text-danger">
                            {validation.password[0]}
                          </small>
                        )}
                      </div>
                      <button
                        className="btn btn-primary border-dark me-2"
                        type="submit"
                      >
                        Masuk
                      </button>
                      <Link to="/register" className="btn btn-link">
                        Daftar disini
                      </Link>
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
