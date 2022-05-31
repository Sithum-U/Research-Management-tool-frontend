import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Docsubmit = () => {
  const [data, setData] = useState({
    docUrl: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:9000/api/hotels/add";
      const { data: res } = await axios.post(url, data);
      navigate("/admin");
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
    <div className={styles.signup_container4}>
      <div className={styles.signup_form_container4}>
        <div className={styles.right4}>
          <form className={styles.form_container4} onSubmit={handleSubmit}>
            <h1>Document Submission</h1>
            <br></br>

            <input
              type="file"
              placeholder="Document"
              name="Document"
              onChange={handleChange}
              value={data.docUrl}
              required
              className={styles.input}
            />
             <br></br>
            {error && <div className={styles.error_msg}>{error}</div>}
            <button type="submit" className={styles.green_btn}>
              Submit
            </button>
            
            <Link to="/signup">
            <button
              type="button"
              variant="outline-info"
              className={styles.white_btn}
            >
              NEXT
            </button>
          </Link>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Docsubmit;
