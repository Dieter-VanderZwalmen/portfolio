import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// documentatie en verschillende manieren
// https://react-bootstrap.github.io/components/modal/
const ModalComponent = (props) => {

// create map of all projects and their details to be displayed in the modal window when the user clicks on a project card in the projects page.
const projects = [
    {
        name: "Project 1",
        description: "This is the description of project 1",
        link: "https://www.google.com",
        image: "https://source.unsplash.com/random/800x600"
    },
    {
        name: "Project 2",
        description: "This is the description of project 2",
        link: "https://www.google.com",
        image: "https://source.unsplash.com/random/800x600"
    },
    {
        name: "Project 3",
        description: "This is the description of project 3",
        link: "https://www.google.com",
        image: "https://source.unsplash.com/random/800x600"
    },
  ]
  
  //get the project with name == Project 1
  const project = projects.find(project => project.name === props.title);

  
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }


  if(project !== undefined){
  return (
    <>
      
        <Button  key="xxl-down" className="me-2 mb-2 xxl-down" onClick={() => handleShow(true)}>
          Full screen
        </Button>
     
      <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          



          <Modal.Title>{project.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {/* <div className='container'>
          {project.description}
          </div>
          <button className="btn btn-primary"><a href ={props.link} ></a></button>
          <img src={project.image} alt="project" className="img-fluid" /> */}
          </Modal.Body>
      </Modal>
    </>
  );}
  else{
    return (<> </>);}
}

export default ModalComponent