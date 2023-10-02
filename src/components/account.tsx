import { useState } from "react";
import "./components.css";

export const Account = () => {
  const [method, setMethod] = useState<string>("login");
  return (
    <div className="account">
      <div className="method">
        <span onClick={() => setMethod("login")}>login</span>
        or
        <span onClick={() => setMethod("register")}>register</span>
      </div>
      {method === "login" && (
        <div className="login">
          <h1>- Login -</h1>
          <input />
          <input type="password" />
          <button>Log in</button>
        </div>
      )}

      {method === "register" && (
        <div className="register">
          <h1>- Register -</h1>
          <input />
          <input type="password" />
          <button>Register</button>
        </div>
      )}
    </div>
  );
};
