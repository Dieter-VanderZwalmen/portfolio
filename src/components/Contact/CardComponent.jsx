import Card from "react-bootstrap/Card";
import React from "react";
//logos


const CardComponent = (props) => {
  // //state turn



  return (
    <>

      <Card className="card">
        <div className="card__inner">
          <div class="card__face card__face--front">
        <center>
          <img src={props.src} class="pp" />
        </center>
        <Card.Body >
          <h2>{props.title}</h2>
          <hr></hr>
          

          {/* if props.githublink is not empty render following statement */}
          {props.link !== undefined ? <a href={props.link} target="_blank" class="btn btn-primary">Go to {props.title}</a> : ""}

        </Card.Body>

          </div>
        </div>
      </Card>

    </>
  )

}


export default CardComponent