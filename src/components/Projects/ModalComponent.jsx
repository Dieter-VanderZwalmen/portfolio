import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Icon} from '@iconify/react';


// documentatie en verschillende manieren
// https://react-bootstrap.github.io/components/modal/
const ModalComponent = (props) => {

  // create map of all projects and their details to be displayed in the modal window when the user clicks on a project card in the projects page.
  const projects = [
    {
      name: "Springboot Website",
      description: "This is a website that I created using Springboot. The website is a simple coin collection application that allows the user to add coins to their collection, Join a club.",
      infoMap: [
        {
          map1: [{
            subtitle: "THIS IS JUST FILLER TEXT Create Read Update Delete",
            text: ["Here I ", <strong>create </strong> ,"a collector ",<strong>read </strong>, "all the collectors. Afterwards I can ", <strong>update </strong> ," and ", <strong>delete </strong>, "the collector."],
            image: "https://source.unsplash.com/random/800x600"
          },],
          map2: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed. All the characters have been restored. And file size is now the same as before.",
            image: "https://source.unsplash.com/random/800x600"
          },]

        }
      ]
    },
    {
      name: "React Website",
      infoMap: [
        {
          encodingMap: [{
            subtitle: "Encoding of the file",
            text: "The file will be compressed",
            image: "https://source.unsplash.com/random/800x600"
          },],
          decodingMap: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed",
            image: "https://source.unsplash.com/random/800x600"
          },]

        }
      ]
    },
    {
      name: "Minesweeper",
      infoMap: [
        {
          encodingMap: [{
            subtitle: "Encoding of the file",
            text: "The file will be compressed",
            image: "https://source.unsplash.com/random/800x600"
          },],
          decodingMap: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed",
            image: "https://source.unsplash.com/random/800x600"
          },]

        }
      ]
    },
    {
      name: "Huffmann Encoding",
      infoMap: [
        {
          map1: [{
            subtitle: "Encoding of the file",
            text: "The file will be compressed. The text has been transformed into all kinds of characters. As you can see the file size is now smaller than before.",
            image: "https://source.unsplash.com/random/800x600"
          },],
          map2: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed. All the characters have been restored. And file size is now the same as before.",
            image: "https://source.unsplash.com/random/800x600"
          },]

        }
      ]
    },
    {
      name: "Phoenix",
      infoMap: [
        {
          encodingMap: [{
            subtitle: "Encoding of the file",
            text: "The file will be compressed",
            image: "https://source.unsplash.com/random/800x600"
          },],
          decodingMap: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed",
            image: "https://source.unsplash.com/random/800x600"
          },]

        }
      ]
    },
    {
      name: "Scripting",
      infoMap: [
        {
          encodingMap: [{
            subtitle: "Encoding of the file",
            text: "The file will be compressed",
            image: "https://source.unsplash.com/random/800x600"
          }],
          decodingMap: [{
            subtitle: "Decoding of the file",
            text: "The file will be decompressed",
            image: "https://source.unsplash.com/random/800x600"
          }],
          compressionMap: [{
            subtitle: "compressing of the file",
            text: "The file will be testeedseiuhgeisurhgiesurgh",
            image: "https://source.unsplash.com/random/800x600"
          }]

        }
      ]
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
            
            {project?.infoMap[0]?.map1?.map((m) => (
              <div className='cards'>
                
                
                <h4>{m.subtitle}</h4>
                <p>{m.text}</p>
                <img src={m.image} alt="img" />
              </div>
            ))}

            {project?.infoMap[0]?.map2?.map((m) => (
              <Modal.Body>
                <h4>{m.subtitle}</h4>
                <p>{m.text}</p>
                <img src={m.image} alt="img" />
              </Modal.Body>
            ))}


            {project?.infoMap[0]?.map3?.map((m) => (
              <Modal.Body>
                 <h4>{m.subtitle}</h4>
                <p>{m.text}</p>
                <img src={m.image} alt="img" />
              </Modal.Body>
            ))}
             {project?.infoMap[0]?.map4?.map((m) => (
              <Modal.Body>
                <h4>{m.subtitle}</h4>
                <p>{m.text}</p>
                <img src={m.image} alt="img" />
              </Modal.Body>
            ))}
            
          </Modal.Body>
        </Modal>
      </>
    );
  }
  else {
    return (<> </>);
  }
}

export default ModalComponent