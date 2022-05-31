import React, { useEffect } from "react";
import { useState, createRef } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import axios from "axios";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  

  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
  //display date
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  }, //end date

  root: {
    display: "flex",
    "& > *": {},
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Create() {
 
  const [groupName, setgroupName] = useState("");
  const [member1, setmember1] = useState("");
  const [member2, setmember2] = useState("");
  const [member3, setmember3] = useState("");
  const [member4, setmember4] = useState("");
  const [it1, setit1] = useState("");
  const [it2, setit2] = useState("");
  const [it3, setit3] = useState("");
  const [it4, setit4] = useState("");
  

  const [value, setValue] = React.useState("Controlled");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const classes = useStyles();

  const [creategroup, setreservation] = useState({
    groupName: "",
    member1: "",
    member2: "",
    member3: "",
    member4: "",
    it1: "",
    it2: "",
    it3: "",
    it4: "",
    
  });
  const [hotel, setHotels] = useState([]);

  const handleSubmit = (e) => {
    console.log(creategroup);
    e.preventDefault();
    axios
      .post("http://localhost:9000/api/creategroup/add", creategroup)
      .then((res) => {
        alert("Reservation maid Successfully!");
       
       
      })
      ;
  };

  useEffect(() => {
    fetch("http://localhost:9000/api/hotels/")
      .then((res) => res.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      });
  }, []);

  return (
    <React.Fragment>
      <main className={styles.signup_container3}>
        <div className={styles.signup_form_container3}>
          <div className={styles.right3}>
            <center>
              <Container component="main" maxWidth="xs">
                <Typography component="h1" variant="h4">
                <br></br>
                  <center> Create a Group</center>
                </Typography>
                <br />
                <form
                  className={classes.form}
                  noValidate
                  onSubmit={(e) => {
                    handleSubmit(e);
                  }}
                >
                  <Grid container spacing={2}>
                    
                                       <Grid item xs={12}>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="groupName"
                        label="Group Name"
                        name="Group Name"
                        autoComplete="groupName"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            groupName: e.target.value,
                          })
                        }
                      />
                    </Grid>

                    <div className="container">
            <h5 className="group">Group members</h5>

            <table>
                <thead>
                <tr>
                <th></th>
                    <th>Name</th>
                    <th>ITNumber</th>
               </tr>
                </thead>
                <tbody>
                    {
                            <tr>
                            <td>Member1 (Leader)</td>
                                <td><TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="member1"
                        // label=" Name"
                        name=" Name"
                        autoComplete="member1"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            member1: e.target.value,
                          })
                        }
                      /></td>
                       <td>{<TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="it1"
                        // label="ITNumber"
                        name="ITNumber"
                        autoComplete="it1"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            it1: e.target.value,
                          })
                        }
                      />
                      }
                      </td>
                          <td/>                               
                            </tr>
                     }
                </tbody>
                <tbody>
                    {
                                               <tr>
                            <td>Member2</td>
                                <td><TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="member2"
                        // label=" Name"
                        name=" Name"
                        autoComplete="member2"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            member2: e.target.value,
                          })
                        }
                      /></td>
                      
                       <td>{<TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="it2"
                        // label="ITNumber"
                        name="ITNumber"
                        autoComplete="it2"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            it2: e.target.value,
                          })
                        }
                      />
                      }
                      </td>
                                <td/>
                              </tr>                 
                    }
                </tbody>
                <tbody>
                    {
                            <tr>
                            <td>Member3</td>
                                <td><TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="member3"
                        // label=" Name"
                        name=" Name"
                        autoComplete="member3"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            member3: e.target.value,
                          })
                        }
                      /></td>
                       <td>{<TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="it2"
                        // label="ITNumber"
                        name="ITNumber"
                        autoComplete="it3"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            it3: e.target.value,
                          })
                        }
                      />
                      }
                      </td>
                                <td/>                               
                            </tr>    
                    }
                </tbody>
                <tbody>
                    {                           <tr>
                            <td>Member4</td>
                                <td><TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="member4"
                        // label=" Name"
                        name=" Name"
                        autoComplete="member4"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            member4: e.target.value,
                          })
                        }
                      /></td>
                       <td>{<TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="it4"
                        // label="ITNumber"
                        name="ITNumber"
                        autoComplete="it4"
                        autoFocus
                        onChange={(e) =>
                          setreservation({
                            ...creategroup,
                            it4: e.target.value,
                          })
                        }
                      />
                      }
                      </td>
                          <td/>
                                <tr>
                            
                                </tr>
                            </tr>                           
                    }
                </tbody>
            </table> <br></br>
        </div>
                   
                  </Grid>
                
                  <Link to="/find">
                    <Button type="submit" className={styles.green_btn}>Create Group</Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button className={styles.green_btn}>Back</Button>
                  </Link>
                 
                </form>
              </Container>
            </center>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}
