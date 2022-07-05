import Card from "react-bootstrap/Card";
import React from "react";
//logos


const CardComponent = (props) => {
  // //state turn



  return (
    <>

      <Card className="contactCard">
        <center>
          <img src={props.src} />
        </center>
        <Card.Body >
          <h2>{props.title}</h2>
          <hr></hr>
          

          {/* if props.githublink is not empty render following statement */}
          {props.link !== undefined ? <a href={props.link} target="_blank" class="button">Go to {props.title}</a> : ""}

        </Card.Body>




      </Card>

    </>
  )

}


export default CardComponent