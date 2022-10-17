import React from "react";
import { useEffect,useState } from "react";

const ModalReact = (props) => {
    // const [imageListFlooding, setImageListFlooding] = useState([Flooding, NoFlooding]);
    // const [indexFlooding, setIndexFlooding] = useState(0);
  
    // const [imageListSize, setImageListSize] = useState([boardSize1, boardSize2, boardSize3, boardSize4]);
    // const [indexSize, setIndexSize] = useState(0);
  
  
  
    const handleNext = (index, type) => {
      switch (type) {
  
  
        // case 'flooding':
        //   setIndexFlooding(index);
        //   break;
        // case 'size':
        //   setIndexSize(index);
        //   break;
        // default:
        //   console.log("default in handleNext. Gekozen type: " + type);
  
        //   break;
      }
  
    }
  
  
  
  
  
  
  
  
  
  
    return (
      <>
        <div className='centered-title-text'>
          <h4><strong>H</strong>uffman Encoding</h4>
          <p> <a href="https://en.wikipedia.org/wiki/Huffman_coding" target="_blank">The methodology</a> is implemented is c++. A lossless data encoding algorithm means that no information is lost when compressing and decompressing a file.</p>
        </div>
        {/* make a list of 3 elements each having a title and a description and a video */}
        
        <div className='centered-title-text'>
            <h4><strong>E</strong>ncoding</h4>
            <p> All characters are converted to a binary code given by the binary tree. The file is compressed using the binary codes.</p>
        </div>
        <div className='centered-title-text'>
            <h4><strong>D</strong>ecoding</h4>
            <p> The process of decoding is simply a matter of translating the stream of binary codes using the binary tree. These codes are converted back to the original data.</p>
        </div>

        
        

       
      </>
    );
  
  }
  
  
  export default ModalReact