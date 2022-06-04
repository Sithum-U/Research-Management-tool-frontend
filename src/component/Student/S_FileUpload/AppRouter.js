import React, { useState, useRef } from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import Dropzone from "react-dropzone";
import axios from "axios";
// import { API_URL } from "../utils/constants";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import styles from "../styles.module.css";


const AppRouters = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [previewSrc, setPreviewSrc] = useState(""); // state for storing previewImage
  const [state, setState] = useState({
    file: "",
    description: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [isPreviewAvailable, setIsPreviewAvailable] = useState(false); // state to show preview only for images
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewSrc(fileReader.result);
    };
    fileReader.readAsDataURL(uploadedFile);
    setIsPreviewAvailable(uploadedFile.name.match(/\.(jpeg|jpg|png)$/));
    dropRef.current.style.border = "2px dashed #e9ebeb";
  };

  const updateBorder = (dragState) => {
    if (dragState === "over") {
      dropRef.current.style.border = "2px solid #000";
    } else if (dragState === "leave") {
      dropRef.current.style.border = "2px dashed #e9ebeb";
    }
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
      const {  description } = state;
      if ( description.trim() !== "") {
        if (file) {
          const formData = new FormData();
          formData.append("file", file);
          formData.append("description", description);

          setErrorMsg("");
          await axios.post("http://localhost:8000/uploadd", formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          props.history.push("/list");
        } else {
          setErrorMsg("Please select a file to add.");
        }
      } else {
        setErrorMsg("Please enter all the field values.");
      }
    } catch (error) {
      error.response && setErrorMsg(error.response.data);
    }
  };

  return (
    <div>
      
      <div className={styles.signup_container10}>
      <div className={styles.signup_form_container10}>
        <div className={styles.right10}>
        {/* <Header /> */}
        <br></br>
          <br></br>
          <br></br>
        <h1> <b>Document Submission</b></h1>

<br></br>


       <div className="main-content">
          <React.Fragment>
            <Form className="search-form" onSubmit={handleOnSubmit}>
              {errorMsg && <p className="errorMsg">{errorMsg}</p>}
              
             
              <br></br>
              <div className="upload-section">
                <Dropzone
                  onDrop={onDrop}
                  onDragEnter={() => updateBorder("over")}
                  onDragLeave={() => updateBorder("leave")}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div
                      {...getRootProps({ className: "drop-zone" })}
                      ref={dropRef}
                    >
                      <input {...getInputProps()} />
                      <p>Drag and drop a file OR click here to select a file</p>
                      {file && (
                        <div>
                          <strong>Selected file:</strong> {file.name}
                        </div>
                      )}
                    </div>
                  )}
                </Dropzone>
                
              </div>
              <br></br>
                
              <Row>
                <Col>
                  <Form.Group controlId="description">
                    <Form.Control
                      type="text"
                      name="description"
                      value={state.description || ""}
                      placeholder="Add a Comment Here"
                      onChange={handleInputChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <br></br>
              <br></br>
                  <button type="submit" className={styles.green_btn10}>
                  Submit
                </button>
                    {/* <Button className={styles.green_btn}>Next</Button> */}
                  
            </Form>
          </React.Fragment>
        </div>
      </div>
    </div>
    </div>
    </div>
   
  );
};

export default AppRouters;
