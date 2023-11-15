// AdminPage.js
import React from "react";
import AdminDashboard from "../components/AdminDashboard";
import "../App.css";
import { useNavigate, Link } from "react-router-dom";

const AdminPage = () => {
  const navigate = useNavigate();

  const toUsers = () => {
    navigate("/user");
  };
  return (
    <div className="admin-page">
      <div className="admin-header">
        <h1>Admin Page</h1>
      </div>
      <div className="admin-content">
        <AdminDashboard />
        <div>
          <button onClick={toUsers}>Users</button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
