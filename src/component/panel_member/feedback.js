import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios'

const PanelMember = () =>{
    const [panelFeedback, setpanelFeedback] = useState([]);
    //view modal
    const [RowData,setRowData] = useState([]);
    const [viewShow, setViewShow] = useState(false);
    const handleViewShow = () =>{setViewShow(true)}
    const handleViewClose = () => {setViewShow(false)}
    //add modal
    const [viewPost, setPostShow] = useState(false);
    const handlePostShow = () =>{setPostShow(true)}
    const handlePostClose = () => {setPostShow(false)}
     //edit modal
    const [viewEdit, setEditShow] = useState(false);
    const handleEditShow = () =>{setEditShow(true)}
    const handleEditClose = () => {setEditShow(false)}
    //delete modal
    const [viewDelete, setDeleteShow] = useState(false);
    const handleDeleteShow = () =>{setDeleteShow(true)}
    const handleDeleteClose = () => {setDeleteShow(false)}

    //defeine here local state that store the form data
    const [studentGroup,setStudentGroup] = useState("");
    const [feedback,setFeedback] = useState("");
    const [note,setNote] = useState("");
    const [email,setEmail] = useState("");
    const [status,setStatus] = useState("");

    const [Delete,setDelete] = useState(false);
    //Id for update record and delete
    const [id,setId] = useState("");

    useEffect(() => {
         fetch("http://localhost:8000/panelMember/")
          .then((res) => res.json())
          .then((data) => {
            setpanelFeedback(data);
            //console.log(data);
          });
      }, []);

      const handleSubmit = () =>{
        const url = 'http://localhost:8000/panelMember/'
        const credentials = {studentGroup,feedback,note,email,status}
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

      const handleEdit = () =>{
        const url = `http://localhost:8000/panelMember/${id}`
        const credentials = {studentGroup,feedback,note,email,status}
        axios.put(url, credentials)
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
        const url = `http://localhost:8000/panelMember/${id}`
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
    return (
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
                <h3>Feedback's For the Student's Topic Evaluation</h3>
            <div className="row">
                <div className="mt-5 mb-4">
                   <Button variant="primary" onClick={()=>{handlePostShow()}}><i className="fa fa-plu"></i>
                   Add New Feedback
                    </Button> 
                </div>
            </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Group</th>
                                <th>Feedback</th>
                                <th>Note</th>
                                <th>Email</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                     {panelFeedback.data?
                           panelFeedback.data.map((item) => {
                              return (
                                <tr key={item._id}>
                                    <td>{item.studentGroup}</td>
                                    <td>{item.feedback}</td>
                                    <td>{item.note}</td>
                                    <td>{item.email}</td>
                                    <td>{item.status}</td>
                                    <td style={{minWidth:190}}>
                                        <Button size="sm" variant="primary" onClick={()=>{handleViewShow(setRowData(item))}}>View</Button>|
                                        <Button size="sm" variant="warning" onClick={()=>{handleEditShow(setRowData(item), setId(item._id))}}>Edit</Button>|
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
            {/*Model to view button */}
            <div className="model-box-view">
                <Modal 
                    show={viewShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>View Feedback Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-goup">
                                    <input type="text" className="form-control" value={RowData.studentGroup} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" value={RowData.feedback} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" value={RowData.note} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" value={RowData.email} readOnly/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" value={RowData.status} readOnly/>
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
                            <Modal.Title>Add Feedback Details</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-goup">
                                    <input type="text" className="form-control" onChange={(e)=> setStudentGroup(e.target.value)} placeholder="Please enter Group Number"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setFeedback(e.target.value)} placeholder="Please enter Feedback"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setNote(e.target.value)} placeholder="Please enter Note"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} placeholder="Please enter Emai"/>
                                </div>
                                <div className="form-goup mt-3">
                                    <input type="text" className="form-control" onChange={(e)=> setStatus(e.target.value)} placeholder="Please enter Status"/>
                                </div>
                                <Button type="submit" className="btn btn-success mt-4" onClick={handleSubmit}>Add Feedback</Button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handlePostClose}>Close</Button>
                        </Modal.Footer>
                
                </Modal>

            </div>

            {/*Modal to edit the data to the database */}
            <div className="model-box-view">
                <Modal 
                    show={viewEdit}
                    onHide={handleEditClose}
                    backdrop="static"
                    keyboard={false}
                    >
                        <Modal.Header>
                            <Modal.Title>Edit Feedback Data</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <div className="form-goup">
                                    <label>Student Group</label>
                                    <input type="text" className="form-control" onChange={(e)=> setStudentGroup(e.target.value)} defaultValue={RowData.studentGroup}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Feedback</label>
                                    <input type="text" className="form-control" onChange={(e)=> setFeedback(e.target.value)} defaultValue={RowData.feedback}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Email</label>
                                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} defaultValue={RowData.email}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Note</label>
                                    <input type="text" className="form-control" onChange={(e)=> setNote(e.target.value)} defaultValue={RowData.note}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Status</label>
                                    <input type="text" className="form-control" onChange={(e)=> setStatus(e.target.value)} defaultValue={RowData.status}/>
                                </div>
                                <Button type="submit" className="btn btn-warning mt-4" onClick={handleEdit}>Edit Feedback</Button>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleEditClose}>Close</Button>
                        </Modal.Footer>
                
                </Modal>

            </div>
        </div>
        </div>
    );
};

export default PanelMember;