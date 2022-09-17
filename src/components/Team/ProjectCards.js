import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCards(props) {
  return (
    <div>
      
      
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
      <Card.Title style={{color: "rgb(33 31 39)" , fontFamily:"sans-serif" ,    fontSize:"2rem"}}>{props.title}</Card.Title>
      
        <Card.Text style={{ textAlign: "justify" ,color: "rgb(33 31 39)"}}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank" >Contact
        </Button>
        
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        
      </Card.Body>
     
    </div>
  );
}
export default ProjectCards;
