import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  // validation
  const [validation, setValidation] = useState([]);

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    // inisialisasi form
    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("password_confirmation", passwordConfirmation);

    await axios
      .post("http://localhost:8000/api/auth/register", formData)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // console.log(error.response.data);
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
                <div className="card">
                  <div className="card-header">Register</div>
                  <div className="card-body">
                    <form onSubmit={registerHandler}>
                      <div className="mb-3 mt-3">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Nama Anda"
                          value={name}
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                        {validation.name && (
                          <small className="text-danger">
                            {validation.name[0]}
                          </small>
                        )}
                      </div>
                      <div className="mb-3">
                        <input
                          type="email"
                          className="form-control"
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
                          className="form-control"
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
                      <div className="mb-3">
                        <input
                          type="password"
                          className="form-control"
                          id="password_confirmation"
                          name="password_confirmation"
                          placeholder="Password Confirm"
                          value={passwordConfirmation}
                          onChange={(e) => {
                            setPasswordConfirmation(e.target.value);
                          }}
                        />
                      </div>
                      <button className="btn btn-primary" type="submit">
                        Daftar
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

export default Register;
