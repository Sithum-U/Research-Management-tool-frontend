import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { FaUserAlt } from "react-icons/fa";

function Login() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const res = await fetch("http://localhost:9000/api/auth/login", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      // localStorage.setItem("token", data.token);

      if (data.message == "Login successful") {
         {
          window.location.href = "/add";
          console.log(data);
        }
      } else {
        console.log("Invalid user Name or password");
      }
      // window.location.href = "/";
      console.log(data.username);
      console.log(data.password);
      console.log(data.role);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_form_container}>
        <div className={styles.left}>
          <form className={styles.form_container}>
            <hr />
            <h1>
              {" "}
              <FaUserAlt /> Student Login
            </h1>
            <hr />
            <input
              type="username"
              placeholder="Username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
              //value={data.username}
              required
              className={styles.input}
            />
            <input
              type="password"
              // class="fontAwesome"&#xf007;
              placeholder="Password"
              name="password"
              //onChange={handleChange}
              onChange={(e) => setPassword(e.target.value)}
              // value={data.password}
              required
              className={styles.input}
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <button
              className={styles.green_btn}
              type="submit"
              onClick={handleSubmit}
            >
              Login
            </button>
            <a href="">Forgot Password</a>
          </form>
        </div>
        <div className={styles.right}>
          <h4>Haven't Signed In ?</h4>
          <hr />

          <Link to="/signup">
            <button
              type="button"
              variant="outline-info"
              className={styles.white_btn}
            >
              SignUp Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
