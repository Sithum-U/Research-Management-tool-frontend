import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const Signup = () => {
  //   const [age, setAge] = React.useState("");

  const [data, setData] = useState({
    username: "",
    password: "",
    email: "",
    phone: "",
    role: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const url = "";
  //     const { data: res } = await axios.post(url, data);
  //     navigate("/login");
  //     console.log(res.message);
  //   } catch (error) {
  //     if (
  //       error.response &&
  //       error.response.status >= 400 &&
  //       error.response.status <= 500
  //     ) {
  //       setError(error.response.data.message);
  //     }
  //   }
  // };

  const handleSubmit = (e) => {
    console.log(data);
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/register", data)
      .then((res) => {
        alert("User Created Successfully!");
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h4>Already have an account ? </h4>
          <hr />
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Sign In
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>REGISTER</h1>
            <input
              type="username"
              placeholder="Username"
              name="username"
              onChange={(e) =>
                setData({
                  ...data,
                  username: e.target.value,
                })
              }
              id="username"
              required
              className={styles.input}
            />
            <input
              type="password"
              id="password"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setData({
                  ...data,
                  password: e.target.value,
                })
              }
              required
              className={styles.input}
            />
            <input
              type="email"
              id="email"
              placeholder="Email"
              name="email"
              onChange={(e) =>
                setData({
                  ...data,
                  email: e.target.value,
                })
              }
              required
              className={styles.input}
            />
            <input
              type="phone"
              id="phone"
              placeholder="Phone"
              name="phone"
              onChange={(e) =>
                setData({
                  ...data,
                  phone: e.target.value,
                })
              }
              //value={data.phone}
              required
              className={styles.input}
            />

            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Role
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
                className={styles.input}
              >
                <FormControlLabel
                  id="role"
                  value="student"
                  control={<Radio />}
                  label="Student"
                  onChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }
                />
                <FormControlLabel
                  id="role"
                  value="staff"
                  control={<Radio />}
                  label="Staff"
                  onChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }
                />
                <FormControlLabel
                  id="role"
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                  onChange={(e) =>
                    setData({
                      ...data,
                      phone: e.target.value,
                    })
                  }
                />
              </RadioGroup>
            </FormControl>

            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
