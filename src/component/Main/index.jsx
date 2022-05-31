import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { makeStyles } from "@material-ui/core/styles";
import "../Main/styles.css";
import Hotel from "../Home";
// import hotelDetails from "../../hotelDetails";
import "./styles.css";
import footer from "../footer";
// import Taxi from "../Taxis/taxi";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Link, useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },

  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

const hotel = [
  {
    id: "hotelName",
    label: "Hotel Name",
    minWidth: 100,
    align: "center",
    main: "#f44336",
  },
  {
    id: "location",
    label: "Location",
    minWidth: 170,
    align: "center",
  },
  {
    id: "description",
    label: "Description",
    minWidth: 170,
    align: "center",
  },

  {
    id: "price",
    label: "Price",
    minWidth: 170,
    align: "center",
  },
  {
    id: "imageUrl",
    label: "Image URL",
    minWidth: 170,
    align: "center",
  },
];

const Main = () => {
  const [hotel, setHotel] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/api/hotels/")
      .then((res) => res.json())
      .then((data) => {
        setHotel(data);
        console.log(data);
      });
  }, []);

  const classes = useStyles();
  const handleLogout = () => {
    localStorage.removeItem("token");
    // window.location.reload();
    window.location.href = "/login";
  };
  const [porequest, setPOrequest] = useState({
    hotelName: "",
    noofRooms: "",
  });
  return (
    <div>
      <div class="topnav">
        <a className="name" href="#home">
          Hotel.lk
        </a>
        <a href="/login">Logout</a>
        <Link to="/login">Sign In</Link>
        <Link to="/signup">Register</Link>
        <Link to="/find">Reserve</Link>
        

        <a class="active" href="#home">
          {" "}
          Home{" "}
        </a>
      </div>
      <br></br>
      <h4>
        Find the Perfect Hotel on <b>Hotel.lk </b>
        from budget Hotels to Luxurious Suites and Everything in between..
      </h4>

      <br></br>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          variant="outlined"
          id="date"
          label="Reservation Date"
          type="date"
          sx={{ width: 300 }}
          defaultValue="2021-09-14"
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(e) => setPOrequest({ ...porequest, date: e.target.value })}
        />
      </Grid>
      <hr></hr>

      <dl className="dictionary">
        {hotel.map((hotelDetail) => {
          console.log(hotelDetail);
          return (
            <Hotel
              key={hotelDetail.id}
              imageUrl={hotelDetail.imageUrl}
              hotelName={hotelDetail.hotelName}
              location={hotelDetail.location}
              description={hotelDetail.description}
              price={hotelDetail.price}
            />
          );
        })}
      </dl>
      <footer />
    </div>
  );
};

export default Main;
