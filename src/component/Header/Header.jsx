import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "antd";
import "./Header.css";
import axios from "axios";
import { API_BASE_URL } from "../../config/env.config";
import { UserProfile } from "../UserProfile/UserProfile";


export function Header() {
  const [userName, setUserName] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
 

  useEffect(() => {
   
    axios
      .get(`${API_BASE_URL}/userlist`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((username) => {
        setUserName(username.data.fullName);
      })
      .catch((errrr) => {
        console.log("errrr", errrr);
      });
  }, []);
  const updateName= ()=>{

  }

  const logoutUser = () => {
    localStorage.clear();
    navigate("/login");
  };

  const loginUser = () => {
    navigate("/login");
  };
  return (
    <div className="">
      <header className="headerDetails">
        <ul className="header-ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>

          <li>
            {localStorage.getItem("token") ? (
              <Link to="/signup">ProductList</Link>
            ) : (
              <Link to="/signup">Signup</Link>
            )}
          </li>

          {localStorage.getItem("token") && (
            <span
              style={{
                marginLeft: "80px",
                color: "white",
                fontSize: "30",
                fontWeight: "600",
              }}
            >
              {userName}
              <li><Button onClick={updateName(token)}>Update</Button></li>
            </span>
          )}
          

          <li>
            {localStorage.getItem("token") ? (
              <>
                <Button className="logout-button" onClick={logoutUser}>
                  Logout
                </Button>
              </>
            ) : (
              <Button type="primary" onClick={loginUser}>
                Login
              </Button>
            )}
          </li>
        </ul>
      </header>
      <UserProfile />
        </div>
  );
}
