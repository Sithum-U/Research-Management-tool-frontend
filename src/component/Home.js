import React from "react";
import "./style.css";

function Home(props) {
  console.log(props);
  return (
    <div className="term">
      <dt>
        <img className="circle-img" src={props.imageUrl} alt="avatar_img" />;
      </dt>
      <span>{props.hotelName}</span>
      <dd>{props.location}</dd>
      <dd>{props.description}</dd>
      <dd>Rs: {props.price} /=</dd>
    </div>
  );
}

export default Home;
