import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup = () => {
  const [data, setData] = useState({
    // firstName: "",
    // lastName: "",
    itnum: "",
    stdname: "",
    nic: "",
    
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const url = "https://registrationformbackend.herokuapp.com/api/users";
      const url = "http://localhost:9000/api/auth/register";
      const { data: res } = await axios.post(url, data);
      navigate("/login");
      console.log(res.message);
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
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h4>Already have an account ? </h4>
          <hr />
          <Link to="/login">
            <button type="button" className={styles.white_btn}>
              Login
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Register a Student</h1>
            {/* <input
              type="text"
              placeholder="First Name"
              name="firstName"
              onChange={handleChange}
              value={data.firstName}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              onChange={handleChange}
              value={data.lastName}
              required
              className={styles.input}
            /> */}
            <input
              type="text"
              placeholder="IT Number"
              name="IT Numbe"
              onChange={handleChange}
              value={data.itnum}
              required
              className={styles.input}
            />
            <input
              type="text"
              placeholder="Student Name"
              name="Student Name"
              onChange={handleChange}
              value={data.stdname}
              required
              className={styles.input}
              
            />
            <input
              type="text"
              placeholder="NIC"
              name="NIC"
              onChange={handleChange}
              value={data.nic}
              required
              className={styles.input}
            />
            
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
