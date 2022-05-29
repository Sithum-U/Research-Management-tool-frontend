import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios'

const Presentation = () =>{
    const [presentation, setpresentation] = useState([]);

    //view modal
    const [RowData,setRowData] = useState([]);
    const [viewShow, setViewShow] = useState(false);
    const handleViewShow = () =>{setViewShow(true)}
    const handleViewClose = () => {setViewShow(false)}
    //add modal
    const [viewPost, setPostShow] = useState(false);
    const handlePostShow = () =>{setPostShow(true)}
    const handlePostClose = () => {setPostShow(false)}
    //delete modal
    const [viewDelete, setDeleteShow] = useState(false);
    const handleDeleteShow = () =>{setDeleteShow(true)}
    const handleDeleteClose = () => {setDeleteShow(false)}

    //defeine here local state that store the form data
    const [studentGroup,setStudentGroup] = useState("");
    const [description,setDescription] = useState("");
    const [presentationSkills,setPresentationSkills] = useState("");
    const [correctness,setCorrectness] = useState("");
    const [content,setContent] = useState("");
    const [total,setTotal] = useState("");
    const [overoll,setOveroll] = useState("");

    const [Delete,setDelete] = useState(false);
    //Id for update record and delete
    const [id,setId] = useState("");

    useEffect(() => {
        fetch("http://localhost:8000/presentation/")
         .then((res) => res.json())
         .then((data) => {
            setpresentation(data);
           //console.log(data);
         });
     }, []);

     const handleSubmit = () =>{
        const url = 'http://localhost:8000/presentation/'
        const credentials = {studentGroup,description,presentationSkills,correctness,content,total,overoll}
        axios.post(url, credentials)
        .then(response=>{
            const result = response.data;
            const {status, message} = result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                alert(message);
                window.location.reload();
            }
        })
        .catch(err=>{
            console.log(err);
        })
      }

     //handle delete function
     const handleDelete = () =>{
        const url = `http://localhost:8000/presentation/${id}`
        axios.delete(url)
        .then(response=>{
            const result = response.data;
            const {status, message} = result;
            if(status !== 'SUCCESS'){
                alert(message,status)
            }
            else{
                alert(message);
                window.location.reload();
            }
        })
        .catch(err=>{
            console.log(err);
        })
      }

     return(
        <div>
            <div className="container">
            <div className="row">
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Panel Member</span>
            </nav>
            <br/><br/>
            <div className="card">
                        <h5 className="card-header">Search Filter</h5>
                        <div className="d-flex justify-content-between align-items-center mx-50 row pt-0 pb-2">
                            <div className="col-md-4 user_role"></div>
                            <div className="col-md-4 user_plan"></div>
                            <div className="col-md-4 user_status"></div>
                        </div>
            </div>
            <br/><br/><br/><br/>
            <hr/>
            <div className="card">
                <div className="card-body">
                <h3>Marks For Presentations</h3>
            <div className="row">
                <div className="mt-5 mb-4">
                   <Button variant="primary" onClick={()=>{handlePostShow()}}><i className="fa fa-plu"></i>
                   Add New Presentation Mark
                    </Button> 
                </div>
            </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Group</th>
                                <th>Total</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                     {presentation.data?
                           presentation.data.map((item) => {
                              return (
                                <tr key={item._id}>
                                    <td>{item.studentGroup}</td>
                                    <td>{item.total}</td>
                                    <td style={{minWidth:190}}>
                                        <Button size="sm" variant="primary" onClick={()=>{handleViewShow(setRowData(item))}}>View</Button>|
                                        <Button size="sm" variant="danger" onClick={()=>{handleViewShow(setRowData(item), setId(item._id), setDelete(true))}}>Delete</Button>
                                    </td>
                                </tr>
                              );
                              })
                              :<div></div>}
                            
                        </tbody>

                    </table>
                </div>
                </div>
            </div>
            </div>
            </div>
            {/*Model to view button */}
            <div className="model-box-view">
                <Modal 
                    show={viewShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>View Presentation Marks</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-goup">
                                    <label>Student Group</label>
                                    <input type="text" className="form-control" value={RowData.studentGroup} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Description</label>
                                    <input type="text" className="form-control" value={RowData.description} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Presentation Skills Marks</label>
                                    <input type="text" className="form-control" value={RowData.presentationSkills} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Correctness</label>
                                    <input type="text" className="form-control" value={RowData.correctness} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Content</label>
                                    <input type="text" className="form-control" value={RowData.content} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Content</label>
                                    <input type="text" className="form-control" value={RowData.total} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Overall</label>
                                    <input type="text" className="form-control" value={RowData.overoll} readOnly/>
                                </div>
                                {
                                    Delete && (
                                        <div>
                                            <br/><br/>
                                        <p>Are You Sure, Do you need to delete this?</p>
                                        <Button type="submit" className="btn btn-danger mt-4" onClick={handleDelete}>Yes</Button>
                                        </div>
                                    )
                                }
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleViewClose}>Close</Button>
                        </Modal.Footer>
                
                </Modal>
            </div>

            {/*Modal to submit the data to the database */}
            <div className="model-box-view">
                <Modal 
                    show={viewPost}
                    onHide={handlePostClose}
                    backdrop="static"
                    keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>Add Presentation Marks</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-goup">
                                    <input type="text" className="form-control" onChange={(e)=> setStudentGroup(e.target.value)} placeholder="Please enter Group Number"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setDescription(e.target.value)} placeholder="Please enter the description"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setPresentationSkills(e.target.value)} placeholder="Please enter Prsentation Skills Marks"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setCorrectness(e.target.value)} placeholder="Please enter Marks for Correctness"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setContent(e.target.value)} placeholder="Please enter Marks for Content"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setTotal(e.target.value)} placeholder="Please enter Total Mark"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setOveroll(e.target.value)} placeholder="Please enter Overoll"/>
                                </div>
                                <Button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>Add Feedback</Button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handlePostClose}>Close</Button>
                        </Modal.Footer>
                
                </Modal>

            </div>
        </div>
     );
};

export default Presentation;