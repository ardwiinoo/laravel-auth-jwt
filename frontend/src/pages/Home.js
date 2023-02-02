import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [user, setUser] = useState("");

  const navigate = useNavigate();

  // ambil token
  const token = localStorage.getItem("token");

  // get data user login
  const fetchData = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://localhost:8000/api/auth/me").then((response) => {
      setUser(response.data);
    });
  };

  useEffect(() => {
    // kalo ga ada token, ke login
    if (!token) {
      navigate("/login");
    }

    // kalo ada request ke server
    fetchData();
  }, []);

  const logoutHandler = async () => {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    await axios.post("http://localhost:8000/api/auth/logout").then(() => {
      // hapus token di localstorage
      localStorage.removeItem("token");

      navigate("/");
    });
  };

  return (
    <div>
      <div className="container">
        <div className="d-flex align-items-center" style={{ height: "100vh" }}>
          <div style={{ width: "100%" }}>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card border-dark">
                  <div className="card-header border-dark">Dashboard</div>
                  <div className="card-body">
                    <h5>Halo, {user.name}</h5>
                    <p>
                      Email kamu {user.email} sangat menarik, kamu sudah
                      bergabung sejak {user.created_at}
                    </p>
                    <button
                      className="btn btn-danger border-dark"
                      onClick={logoutHandler}
                    >
                      Logout
                    </button>
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

export default Home;
