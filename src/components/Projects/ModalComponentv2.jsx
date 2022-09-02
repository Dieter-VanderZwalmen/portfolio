import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Icon} from '@iconify/react';
import ModalSpringboot from './Modals/ModalSpringboot';
import ModalMinesweeper from './Modals/ModalMinesweeper';
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
      name: "Phoenix",
      
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
            <Icon classname="top-right-transparent" icon={props.img} />
            {project.name}
            </Modal.Title>
            


          </Modal.Header>
          <Modal.Body>
            {/* This implemenation is not clean. I dont know why but project.infoMap[0].map to get all the maps does not work.*/}
            
            {/* if project name equals "Springboot Website" show the modal-springboot component*/}
            {project.name === "Springboot Website" ? <ModalSpringboot /> : null}
            {project.name === "Minesweeper" ? <ModalMinesweeper /> : null}
              
            
          </Modal.Body>
        </Modal>
      </>
    );
  }
  else {
    return (<> </>);
  }
}

export default ModalComponentv2