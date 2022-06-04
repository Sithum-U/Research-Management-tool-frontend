import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { green, pink } from "@material-ui/core/colors";

import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import SoloAlert from "soloalert";
import axios from "axios";
import { MDBCol } from "mdbreact";
import "./styles.css";
import styles from "./styles.module.css";

import Footer from "../Layout/Footer";
import Header from "../Layout/HeaderH";

import { Button, Modal } from 'react-bootstrap';
// import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBCardHeader } from 'mdb-react-ui-kit';

const columns = [
  {
    id: "studentGrp",
    label: "Student Group",
    minWidth: 100,
    align: "left",
    main: "#f44336",
  },
  {
    id: "completness",
    label: "Completeness",
    minWidth: 170,
    align: "left",
  },
  {
    id: "corectness",
    label: "Correctness",
    minWidth: 170,
    align: "left",
  },

  {
    id: "plagiarism",
    label: "Plagiarism",
    minWidth: 170,
    align: "left",
  },
  {
    id: "total",
    label: "Total Marks",
    minWidth: 170,
    align: "left",
  },
  {
    id: "comments",
    label: "Comments",
    minWidth: 170,
    align: "left",
  }
];

function MarksTable(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [MarksTable("", "", "", "")];

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: theme.spacing(0),
    width: theme.spacing(150),
    height: theme.spacing(60),
    marginTop: theme.spacing(0),
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  root2: {
    width: "100%",
    margin: theme.spacing(35),
    width: theme.spacing(157),
    height: theme.spacing(60),
    marginTop: theme.spacing(0),
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  container: {
    maxHeight: 450,
  },
}));

export default function BranchDetails() {
  const [docMarks, setDocMarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtered, setfiltered] = useState([]);
  const [hotelName, sethotelName] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/docEvaluation/")
      .then((res) => res.json())
      .then((data) => {
        setDocMarks(data);
      });
  }, []);

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const handleChange = ({ currentTarget: input }) => {
    setDocMarks({ ...docMarks, [input.name]: input.value });
  };

  //color picker
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[500],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });

  async function accept() {
    SoloAlert.confirm({
      title: "Confirm Accept",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Acceptance is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/displayDocMarks";
              },
            })
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }

  async function reject() {
    SoloAlert.confirm({
      title: "Confirm Rejection",
      body: "Are you sure",
      theme: "dark",
      useTransparency: true,
      onOk: async function () {
            SoloAlert.alert({
              title: "Welcome!",
              body: "Rejection is successful",
              icon: "success",
              theme: "dark",
              useTransparency: true,
              onOk: function () {
                window.location = "/displayDocMarks";
              },
            })
      },
      onCancel: function () {
        SoloAlert.alert({
          title: "Oops!",
          body: "You canceled delete request",
          icon: "warning",
          theme: "dark",
          useTransparency: true,
          onOk: function () {},
        });
      },
    });
  }

  return (
    <div>
    <Header /><br></br>
      {/* <div className={classes.root2}> */}
      {/* <div class="topnav">
        <a className="name" href="#home">
          Hotel.lk
        </a>
        <a href="" onClick={handleLogout}>
          Logout
        </a>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
        <a href="/main">Home</a>
      </div> */}
      <center>
        <h1 variant="h4" gutterBottom>
          Topic requests from Students
        </h1>
        <MDBCol md="6">
          <input
            class="form-control"
            id="myInput"
            type="text"
            placeholder="Search.."
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </MDBCol>
        <hr />

        <Paper className={classes.root}>
          <TableContainer className={classes.container}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                    <TableCell>Student Group</TableCell>
                    <TableCell>Research Field</TableCell>
                    <TableCell>Research Topic</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                    <TableRow>
                      <TableCell>G4</TableCell>
                      <TableCell>IOT</TableCell>
                      <TableCell>DOM</TableCell>
                      <TableCell>
                      <Button
                      className={styles.button}
                          type="submit"
                          onClick={(e) => {
                            accept();
                          }}
                        >
                          <i class="fa fa-trash"></i> Accept
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          variant="danger"
                          onClick={(e) => {
                            reject();
                          }}
                        >
                          <i class="fa fa-trash"></i> Reject
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>G5</TableCell>
                      <TableCell>Maschine Learning</TableCell>
                      <TableCell>AI</TableCell>
                      <TableCell>
                      <Button
                      className={styles.button}
                          type="submit"
                          onClick={(e) => {
                            accept();
                          }}
                        >
                          <i class="fa fa-trash"></i> Accept
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          variant="danger"
                          onClick={(e) => {
                            reject();
                          }}
                        >
                          <i class="fa fa-trash"></i> Reject
                        </Button>
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell>G6</TableCell>
                      <TableCell>Web Development</TableCell>
                      <TableCell>React</TableCell>
                      <TableCell>
                      <Button
                      className={styles.button}
                          type="submit"
                          onClick={(e) => {
                            accept();
                          }}
                        >
                          <i class="fa fa-trash"></i> Accept
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button
                          type="submit"
                          variant="danger"
                          onClick={(e) => {
                            reject();
                          }}
                        >
                          <i class="fa fa-trash"></i> Reject
                        </Button>
                      </TableCell>
                    </TableRow>

              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </center>
      <Footer />
    </div>
  );
}
