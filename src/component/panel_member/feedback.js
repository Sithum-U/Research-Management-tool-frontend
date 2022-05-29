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

    //defeine here local state that store the form data
    const [studentGroup,setStudentGroup] = useState("");
    const [feedback,setFeedback] = useState("");
    const [note,setNote] = useState("");
    const [email,setEmail] = useState("");
    const [status,setStatus] = useState("");

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
  {  return (
        <div>
            <div className="row">
                <div className="mt-5 mb-4">
                   <Button variant="primary" onClick={()=>{handlePostShow()}}><i className="fa fa-plu"></i>
                   Add New Feedback
                    </Button> 
                </div>
            </div>
            <div className="row">
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead>
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
                                        <Button size="sm" variant="primary" onClick={()=>{handleViewShow(setRowData(item))}}>View</Button>
                                        <Button size="sm" variant="warning" onClick={()=>{handleEditShow(setRowData(item), setId(item._id))}}>Edit</Button>
                                        <Button size="sm" variant="danger">Delete</Button>
                                    </td>
                                </tr>
                              );
                              })
                              :<div></div>}
                            
                        </tbody>

                    </table>
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
                                {/* {
                                    Delete && (
                                        <Button type="submit" className="btn btn-danger mt-4" onClick={handleDelete}>Delete</Button>
                                    )
                                } */}
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleViewClose}>Close</Button>
                        </Modal.Footer>
                
                </Modal>

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
                                    <label>Name</label>
                                    <input type="text" className="form-control" onChange={(e)=> setStudentGroup(e.target.value)} defaultValue={RowData.studentGroup}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Email</label>
                                    <input type="text" className="form-control" onChange={(e)=> setFeedback(e.target.value)} defaultValue={RowData.feedback}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Number</label>
                                    <input type="text" className="form-control" onChange={(e)=> setEmail(e.target.value)} defaultValue={RowData.email}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>NIC</label>
                                    <input type="text" className="form-control" onChange={(e)=> setNote(e.target.value)} defaultValue={RowData.note}/>
                                </div>
                                <div className="form-goup mt-3">
                                    <label>Address</label>
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
    );}
};

export default PanelMember;