import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react';

import SettingsScreen from '../../../assets/Demo/Minesweeper/SettingsScreen.png';
import PlayScreen from '../../../assets/Demo/Minesweeper/PlayScreen.png';
import Flag from '../../../assets/Demo/Minesweeper/Flag.png';

import boardSize1 from '../../../assets/Demo/Minesweeper/6boardSize.png';
import boardSize2 from '../../../assets/Demo/Minesweeper/10boardSize.png';
import boardSize3 from '../../../assets/Demo/Minesweeper/15boardSize.png';
import boardSize4 from '../../../assets/Demo/Minesweeper/20boardSize.png';

import Flooding from '../../../assets/Demo/Minesweeper/Flooding.png';
import NoFlooding from '../../../assets/Demo/Minesweeper/NoFlooding.png';
import Play from '../../../assets/Demo/Minesweeper/Play1.PNG';
import Los from '../../../assets/Demo/Minesweeper/Los.png';
import Win from '../../../assets/Demo/Minesweeper/Win.png';


const ModalSpringboot = (props) => {
  const [imageListFlooding, setImageListFlooding] = useState([Flooding, NoFlooding]);
  const [indexFlooding, setIndexFlooding] = useState(0);

  const [imageListSize, setImageListSize] = useState([boardSize1, boardSize2, boardSize3, boardSize4]);
  const [indexSize, setIndexSize] = useState(0);



  const handleNext = (index, type) => {
    switch (type) {


      case 'flooding':
        setIndexFlooding(index);
        break;
      case 'size':
        setIndexSize(index);
        break;
      default:
        console.log("default in handleNext. Gekozen type: " + type);

        break;
    }

  }










  return (
    <>
      <div className='centered-title-text'>
        <h4>Overview of my version</h4>
        <p> No time was spent on the visuals. The application was made in c# with XAML and scales with screensize. There are no crashes and no known bugs. The settings screen allows you the personalize your experience. </p>
        
         <p> If you dont know how to game works <a href='https://mathworld.wolfram.com/Minesweeper.html#:~:text=Minesweeper%20is%20single%2Dplayer%20logic,a%20mine%2C%20the%20game%20ends.'target="_blank" style={{}}><strong>this</strong></a> explains it.</p>
      </div>
      <div className="geenidee">
      <div className='left'>
        <div className='text'>
          <h4> <strong>S</strong>ettings screen</h4>
          <p> There are 3 preset options labeled easy normal and hard with their own boardsizes and mine probabilities.</p>
        </div>
        <div className='image-container '>
          <img src={SettingsScreen} alt="Settings screen" className='center' />
        </div>
      </div>
      <div className='right'>
        <div className='text'>
          <h4> <strong>P</strong>lay screen</h4>
         <p></p>
        </div>
        <div className='image-container '>
          <img src={PlayScreen} alt="Play screen" className='center' />
        </div>
      </div>

      <div className='left'>
        <div className='text'>
          <h4> <strong>F</strong>looding</h4>
          
        </div>
        <div className='buttons-left-right'>
            <button onClick={() => handleNext(0, 'flooding')} className={indexFlooding === 0 ? "Demo-button activeButton" : "Demo-button"}>Enabled</button>
            <button onClick={() => handleNext(1, 'flooding')} className={indexFlooding === 1 ? "Demo-button activeButton" : "Demo-button"}>Disabled</button>
          </div>
        <div className='image-container slideshow '>
          
          <img src={imageListFlooding[indexFlooding]} alt="Flooding explained on the board" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>B</strong>oardsize</h4>
          <p>  </p>
        </div>
        <div className='buttons-left-right'>
            <button onClick={() => handleNext(0, 'size')} className={indexSize === 0 ? "Demo-button activeButton" : "Demo-button"}>6</button>
            <button onClick={() => handleNext(1, 'size')} className={indexSize === 1 ? "Demo-button activeButton" : "Demo-button"}>10</button>
            <button onClick={() => handleNext(2, 'size')} className={indexSize === 2 ? "Demo-button activeButton" : "Demo-button"}>15</button>
            <button onClick={() => handleNext(3, 'size')} className={indexSize === 3 ? "Demo-button activeButton" : "Demo-button"}>20</button>

          </div>
        <div className='image-container slideshow '>
          
          <img src={imageListSize[indexSize]} alt="Flooding explained on the board" className='center' />
        </div>
      </div>
      <div className='right'>
        <div className='text'>
          <h4> <strong>W</strong>inning the game</h4>
          <p> When you have revealed all blocks without tripping over a mine, a message will appear and the blocks become unclickable. </p>
        </div>
        <div className='image-container '>
          <img src={Win} alt="Play screen" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>L</strong>osing the game</h4>
          <p> When you trip over a mine, all mines will be shown and a message will appear and the blocks become unclickable. </p>
        </div>
        <div className='image-container '>
          <img src={Los} alt="Play screen" className='center' />
        </div>
      </div>
      </div>
    </>
  );

}


export default ModalSpringboot