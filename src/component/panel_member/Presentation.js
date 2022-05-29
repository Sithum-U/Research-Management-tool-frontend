import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios'

const Presentation = () =>{
    const [presentation, setpresentation] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8000/presentation/")
         .then((res) => res.json())
         .then((data) => {
            setpresentation(data);
           //console.log(data);
         });
     }, []);

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
                   <Button variant="primary"><i className="fa fa-plu"></i>
                   Add New Presentation Mark
                    </Button> 
                </div>
            </div>
                <div className="table-responsive">
                    <table className="table table-striped table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>Student Group</th>
                                <th>Presentation Skills</th>
                                <th>Correctness</th>
                                <th>Content</th>
                                <th>Total</th>
                                <th>Overall</th>
                            </tr>
                        </thead>
                        <tbody>
                     {presentation.data?
                           presentation.data.map((item) => {
                              return (
                                <tr key={item._id}>
                                    <td>{item.studentGroup}</td>
                                    <td>{item.presentationSkills}</td>
                                    <td>{item.correctness}</td>
                                    <td>{item.content}</td>
                                    <td>{item.total}</td>
                                    <td>{item.overoll}</td>
                                    <td style={{minWidth:190}}>
                                        <Button size="sm" variant="primary">View</Button>|
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
            </div>
            </div>
            </div>
        </div>
     );
};

export default Presentation;