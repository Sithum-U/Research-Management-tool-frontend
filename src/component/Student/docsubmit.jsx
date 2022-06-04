// import React, { useState } from "react";
// import axios from "axios";
// import { Link, useNavigate } from "react-router-dom";
// import styles from "./styles.module.css";

// const Docsubmit = () => {
//   const [data, setData] = useState({
//     docUrl: "",
//   });

//   const handleChange = ({ currentTarget: input }) => {
//     setData({ ...data, [input.name]: input.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const url = "http://localhost:8000/docsubmit/";
//       const { data: res } = await axios.post(url, data);
//       // navigate("/admin");
//       console.log(res.message);
//     } catch (error) {
//       if (
//         error.response &&
//         error.response.status >= 400 &&
//         error.response.status <= 500
//       ) {
//       }
//     }
//   };

//   return (
//     <div>
     
//       <div className="container">
//         {/* <Header /> */}
//         <h1>Upload Presentation/ Doc Tempaltes and Marking Schemas</h1>

//         <div className="main-content">
//           <React.Fragment>
//             <Form className="search-form" onSubmit={handleOnSubmit}>
//               {errorMsg && <p className="errorMsg">{errorMsg}</p>}
//               <Row>
//                 <Col>
//                   <Form.Group controlId="title">
//                     <Form.Control
//                       type="text"
//                       name="title"
//                       value={state.title || ""}
//                       placeholder="Enter File Name"
//                       onChange={handleInputChange}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col>
//                   <Form.Group controlId="description">
//                     <Form.Control
//                       type="text"
//                       name="description"
//                       value={state.description || ""}
//                       placeholder="Enter File Description"
//                       onChange={handleInputChange}
//                     />
//                   </Form.Group>
//                 </Col>
//               </Row>
//               <div className="upload-section">
//                 <Dropzone
//                   onDrop={onDrop}
//                   onDragEnter={() => updateBorder("over")}
//                   onDragLeave={() => updateBorder("leave")}
//                 >
//                   {({ getRootProps, getInputProps }) => (
//                     <div
//                       {...getRootProps({ className: "drop-zone" })}
//                       ref={dropRef}
//                     >
//                       <input {...getInputProps()} />
//                       <p>Drag and drop a file OR click here to select a file</p>
//                       {file && (
//                         <div>
//                           <strong>Selected file:</strong> {file.name}
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </Dropzone>
//                 {previewSrc ? (
//                   isPreviewAvailable ? (
//                     <div className="image-preview">
//                       <img
//                         className="preview-image"
//                         src={previewSrc}
//                         alt="Preview"
//                       />
//                     </div>
//                   ) : (
//                     <div className="preview-message">
//                       <p>No preview available for this file</p>
//                     </div>
//                   )
//                 ) : (
//                   <div className="preview-message">
//                     <p>Image preview will be shown here after selection</p>
//                   </div>
//                 )}
//               </div>
//               <Button variant="primary" type="submit">
//                 Submit
//               </Button>
//             </Form>
//           </React.Fragment>
//         </div>
//       </div>
//     </div>
//   );


//   // return (
//   //   <div className={styles.signup_container4}>
//   //     <div className={styles.signup_form_container4}>
//   //       <div className={styles.right4}>
//   //         <form className={styles.form_container4} onSubmit={handleSubmit}>
//   //           <br></br>
//   //           <br></br>
//   //           <h1>Document Submission</h1>
//   //           <br></br>

//   //           <input
//   //             type="file"
//   //             placeholder="Document"
//   //             name="docUrl"
//   //             onChange={handleChange}
//   //             value={data.docUrl}
//   //             required
//   //             className={styles.input}
//   //           />
//   //           <br></br>
//   //           <button type="submit" className={styles.green_btn}>
//   //             Submit
//   //           </button>

//   //           <Link to="/signup">
//   //             <button
//   //               type="button"
//   //               variant="outline-info"
//   //               className={styles.white_btn}
//   //             >
//   //               NEXT
//   //             </button>
//   //           </Link>
//   //         </form>
//   //       </div>
//   //     </div>
//   //   </div>
//   // );
// };

// export default Docsubmit;
