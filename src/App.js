import React, { useContext } from "react";
import Dashboard from "./components/Dashboard/UserDashboard";
import { AuthContext } from "./context/context";
import LoginForm from "./components/Login";
import Users from "./components/User/UserList";
import "./App.css";

function App() {
  const auth = useContext(AuthContext);
  return (
    <div className="container">
      {auth.isAuth && <Dashboard />}
      {!auth.isAuth && <LoginForm />}
      <Users />
    </div>
  );
}

export default App;
