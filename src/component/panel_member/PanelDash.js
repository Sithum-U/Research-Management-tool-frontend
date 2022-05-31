import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import './App.css';

const PanelDash = () => {
    return (
        <div style={{backgroundColor:'#83a4d4'}}>
            <div className="container">
            <h3 className="bg-dark text-white p-3">Welcome to the Panel Member Dashboard</h3><br/><br/><br/><br/>
            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://smedigest.com.ng/wp-content/uploads/2017/10/from-business-name-to-company-registration.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Panel Member Registration</MDBCardTitle>
                            <MDBCardText>
                                <Link to="/">
                                    <Button variant="primary">Go</Button>
                                </Link>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://blogmedia.evbstatic.com/wp-content/uploads/wpmulti/sites/19/2020/07/write-event-description.jpg'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Topic Evaluation</MDBCardTitle>
                            <MDBCardText>
                                <Link to="/panelFeedback">
                                    <Button variant="primary">Go</Button>
                                </Link>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://ucollege.wustl.edu/files/ucollege/styles/spotlight_mobile/public/photographs/adult-student-working-header.jpg?itok=QIbj4mf0'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Evaluate Presentations</MDBCardTitle>
                            <MDBCardText>
                                <Link to="/presentation">
                                    <Button variant="primary">Go</Button>
                                </Link>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            </div>
            <br/><br/><br/><br/><br/><br/><br/>
        </div>
        
    );
};

export default PanelDash;