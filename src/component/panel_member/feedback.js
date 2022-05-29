import React, { useEffect, useState } from "react";
import {Button,Modal} from 'react-bootstrap';
//import axios from 'axios'

const PanelMember = () =>{
    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
         fetch("http://localhost:8000/panelMember/")
          .then((res) => res.json())
          .then((data) => {
            setFeedback(data);
            //console.log(data);
          });
      }, []);
  {  return (
        <div>
            <div className="row">
                <div className="mt-5 mb-4">
                   <Button variant="primary"><i className="fa fa-plu"></i>
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
                     {feedback.data?
                           feedback.data.map((item) => {
                              return (
                                <tr key={item._id}>
                                    <td>{item.studentGroup}</td>
                                    <td>{item.feedback}</td>
                                    <td>{item.note}</td>
                                    <td>{item.email}</td>
                                    <td>{item.status}</td>
                                    <td style={{minWidth:190}}>
                                        <Button size="sm" variant="primary">View</Button>
                                        <Button size="sm" variant="warning">Edit</Button>
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
    );}
};

export default PanelMember;