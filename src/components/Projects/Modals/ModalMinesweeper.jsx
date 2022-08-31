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
      <div >
        <h4>Overview of my version</h4>
        <p>lorem ipsum the focus was on the backend. Doesnt crash no bugs, settings to customize the game including flooding board size and mine probability. The game was made with the help of a guide 
          if you dont know how to game works "insertlink" explains it. </p>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>S</strong>ettings screen</h4>
          <p> Lorem ipsum Options to customize the game. Like boardsize, mineprobability and flooding. There are 3 preset options labeled easy normal and hard with their own boardsizes and mineprobabilities.</p>
        </div>
        <div className='image-container '>
          <img src={SettingsScreen} alt="Settings screen" className='center' />
        </div>
      </div>
      <div className='right'>
        <div className='text'>
          <h4> <strong>P</strong>lay screen</h4>
          <p> The play screen has the minesweeper board and a play again button. </p>
        </div>
        <div className='image-container '>
          <img src={PlayScreen} alt="Play screen" className='center' />
        </div>
      </div>

      <div className='left'>
        <div className='text'>
          <h4> <strong>F</strong>looding</h4>
          <p> Lorem ipsum Flooding occurs when you reveal a block and there are no bombs in close proximity.If this happens the surrounding unopened blocks are revealed until all the blocks have mines surrounding. </p>
        </div>
        <div className='image-container slideshow '>
          <div className='buttons-left-right'>
            <button onClick={() => handleNext(0, 'flooding')} className={indexFlooding === 0 ? "Demo-button activeButton" : "Demo-button"}>Enabled</button>;
            <button onClick={() => handleNext(1, 'flooding')} className={indexFlooding === 1 ? "Demo-button activeButton" : "Demo-button"}>Disabled</button>;
          </div>
          <img src={imageListFlooding[indexFlooding]} alt="Flooding explained on the board" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>B</strong>oardsize</h4>
          <p> Lorem ipsum These are examples of the different boardsizes. </p>
        </div>
        <div className='image-container slideshow '>
          <div className='buttons-left-right'>
            <button onClick={() => handleNext(0, 'size')} className={indexPaginatie === 0 ? "Demo-button activeButton" : "Demo-button"}>6</button>;
            <button onClick={() => handleNext(1, 'size')} className={indexPaginatie === 1 ? "Demo-button activeButton" : "Demo-button"}>10</button>;
            <button onClick={() => handleNext(2, 'size')} className={indexPaginatie === 2 ? "Demo-button activeButton" : "Demo-button"}>15</button>;
            <button onClick={() => handleNext(3, 'size')} className={indexPaginatie === 3 ? "Demo-button activeButton" : "Demo-button"}>20</button>;

          </div>
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
      <div className='Left'>
        <div className='text'>
          <h4> <strong>L</strong>osing the game</h4>
          <p> When you trip over a mine, all mines will be shown and a message will appear and the blocks become unclickable. </p>
        </div>
        <div className='image-container '>
          <img src={Los} alt="Play screen" className='center' />
        </div>
      </div>
    </>
  );

}


export default ModalSpringboot