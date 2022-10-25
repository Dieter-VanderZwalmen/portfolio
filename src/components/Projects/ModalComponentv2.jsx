import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Icon} from '@iconify/react';
import ModalSpringboot from './Modals/ModalSpringboot';
import ModalMinesweeper from './Modals/ModalMinesweeper';
import ModalReact from './Modals/ModalReact';
import ModalHuffman from './Modals/ModalHuffman';
import ModalScripting from './Modals/ModalScripting';
import ModalPhoenix from './Modals/ModalPhoenix';
// documentatie en verschillende manieren
// https://react-bootstrap.github.io/components/modal/
const ModalComponentv2 = (props) => {

  // create map of all projects and their details to be displayed in the modal window when the user clicks on a project card in the projects page.
  const projects = [
    {
      name: "Springboot Website",
      
    },
    {
      name: "React Website",
      
    },
    {
      name: "Minesweeper",
      
    },
    {
      name: "Huffmann Encoding",
      
    },
    {
      name: "Phoenix Website",
      
    },
    {
      name: "Scripting",
    

    }
     
  ]



  //get the project with name == x
  var project = projects.find(project => project.name === props.title);

  //this is a very very bad implementation but it works
  

  

 






  const [show, setShow] = useState(false);




  if (project !== undefined) {
    return (
      <>

        <Button variant="primary" onClick={() => setShow(true)}>
          Demo
        </Button>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton>

            <Modal.Title>
            {/* <a href={props.githublink} target="_blank" rel="noreferrer" >
            <Icon classname="top-right" icon="akar-icons:github-fill" style={{color: "grey"}} />
            
            </a> */}
            <Icon classname="top-right-transparent" icon={props.img} className={props.img === "akar-icons:react-fill" ? "rotate" : "white-onhover"} />
            
           

            {project.name}
            </Modal.Title>
            <h4 style={{color: "gray"}}>
              This demo is not finished!
            </h4>
            {/* a element with href to the github repo of the project in props.githublink */}
            
          </Modal.Header>
          <Modal.Body>
          <a href={props.githublink}>
            Source code
          </a>
          
         
            {/* This implemenation is not clean. but it works.*/}
            
            {/* if project name equals "Springboot Website" show the modal-springboot component*/}
            {project.name === "Springboot Website" ? <ModalSpringboot /> : null}
            {project.name === "Minesweeper" ? <ModalMinesweeper /> : null}
            {project.name === "React Website" ? <ModalReact /> : null}
            {project.name === "Huffmann Encoding" ? <ModalHuffman /> : null}
            {project.name === "Scripting" ? <ModalScripting /> : null}
            {project.name === "Phoenix Website" ? <ModalPhoenix /> : null}
            
            
            
           
            
          </Modal.Body>
        </Modal>
      </>
    );
  }
  else {
    return (<Button variant="primary" onClick={() => setShow(true)}>
    In progress
  </Button>
);
  }
}

export default ModalComponentv2