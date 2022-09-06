import { React, useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Icon } from '@iconify/react';

import Read from '../../../assets/Demo/Springboot/Read.PNG';
import Create from '../../../assets/Demo/Springboot/Create.png';
import Paginatie from '../../../assets/Demo/Springboot/Pagination.png';
import Paginatie2 from '../../../assets/Demo/Springboot/Pagination2.png';
import Update from '../../../assets/Demo/Springboot/Update.PNG';
import Delete from '../../../assets/Demo/Springboot/Delete.png';

import filterCountry from '../../../assets/Demo/Springboot/FilterCountry.PNG';
import filterYear from '../../../assets/Demo/Springboot/FilterYear.PNG';
import filterYearAndBefore from '../../../assets/Demo/Springboot/FilterYearAndBefore.PNG';
import FilterAlphabeticalCountry from '../../../assets/Demo/Springboot/FilterAlphabeticalCountry.PNG';
import FilterYearCronological from '../../../assets/Demo/Springboot/FilterYearCronological.PNG';

import Valiation1 from '../../../assets/Demo/Springboot/Validation1.png';
import Valiation2 from '../../../assets/Demo/Springboot/Validation2.png';


import APIOverview from '../../../assets/Demo/Springboot/APIOverview.PNG';
import APIError from '../../../assets/Demo/Springboot/APIError.png';
import APIAddCollector from '../../../assets/Demo/Springboot/APIAddCollector.PNG';

import Login from '../../../assets/Demo/Springboot/Login.PNG';

import TranslationDUTCH from '../../../assets/Demo/Springboot/TranslationDUTCH.PNG';
import TranslationENG from '../../../assets/Demo/Springboot/TranslationENG.PNG';

const ModalSpringboot = (props) => {
  const [imageListCRUD, setImageListCRUD] = useState([Create,Read, Update, Delete]);
  const [imageListPaginatie, setImageListPaginatie] = useState([Paginatie, Paginatie2]);
  const [imageListFilter, setImageListFilter] = useState([filterCountry, filterYear, filterYearAndBefore, FilterAlphabeticalCountry, FilterYearCronological]);
  const [imageListValidation, setImageListValidation] = useState([Valiation1, Valiation2, filterYearAndBefore, FilterAlphabeticalCountry, FilterYearCronological]);
  const [imageListAPI, setImageListAPI] = useState([APIOverview, APIAddCollector, APIError]);
  const [imageListi18n, setImageListi18n] = useState([TranslationENG, TranslationDUTCH]);

  const [indexCRUD, setIndexCRUD] = useState(0);
  const [indexPaginatie, setIndexPaginatie] = useState(0);
  const [indexFilter, setIndexFilter] = useState(0);
  const [indexValidation, setIndexValidation] = useState(0);
  const [indexAPI, setIndexAPI] = useState(0);
  const [indexi18n, setIndexi18n] = useState(0);


  const handleNext = (index, type) => {
    switch (type) {
      case 'CRUD':
        setIndexCRUD(index);
        break;
      case 'paginatie':

        setIndexPaginatie(index);
        break;
      case 'filter':

        setIndexFilter(index);
        break;
      case 'validation':

        setIndexValidation(index);
        break;
      case 'API':
        setIndexAPI(index);
        break;

      case 'i18n':
        setIndexi18n(index);
        break;
      default:
        console.log("default in handleNext. Gekozen type: " + type);

        break;
    }

  }










  return (
    <>
      <div className="centered-title-text">
        <h4>Overview of all the functionalities</h4>
        <p>All the basics were implemented. This includes creating,updating,deleting and reading objects, Also known as CRUD. A rest api, Internationalization, Validation and security. The focus of this project was on the backend. The frontend was kept simple. </p>
      </div>
      <div className="geenidee">
      <div className='left' data-aos="fade-up" data-aos-offset= "0">
        <div className='text'>
          <h4> <strong>CRUD</strong></h4>
          
        </div>
        <div className='buttons-left-right'>
            <button   onClick={() => handleNext(0, 'CRUD')} className={indexCRUD === 0 ? "Demo-button activeButton" : "Demo-button"}><strong>C</strong>reate</button>
            <button   onClick={() => handleNext(1, 'CRUD')} className={indexCRUD === 1 ? "Demo-button activeButton" : "Demo-button"}><strong>R</strong>ead</button>
            <button   onClick={() => handleNext(2, 'CRUD')} className={indexCRUD === 2 ? "Demo-button activeButton" : "Demo-button"}><strong>U</strong>pdate</button>
            <button   onClick={() => handleNext(3, 'CRUD')} className={indexCRUD === 3 ? "Demo-button activeButton" : "Demo-button"}><strong>D</strong>elete</button>
        </div>
        <div className='image-container slideshow '>
          
          <img src={imageListCRUD[indexCRUD]} alt="Form to create a form" className='center' />
        </div>
      </div>
     
      <div className='left'>
        <div className='text'>
          <h4> <strong>P</strong>agination</h4>
          <p> The overview is limited to 5 collections per page. </p>
        </div>
        <div className='buttons-left-right'>
            <button   onClick={() => handleNext(0, 'paginatie')} className={indexPaginatie === 0 ? "Demo-button activeButton" : "Demo-button"}>1</button>
            <button  onClick={() => handleNext(1, 'paginatie')} className={indexPaginatie === 1 ? "Demo-button activeButton" : "Demo-button"}>2</button>
        </div>
        <div className='image-container slideshow '>
          
          <img src={imageListPaginatie[indexPaginatie]} alt="Form to create a form" className='center' />
        </div>
      </div>


      <div className='right'>
        <div className='text'>
          <h4> <strong>F</strong>iltering</h4>
          <p> All the coins can be filtered. </p>
          
        </div>
      <div className='buttons-left-right'>
        <ul className='horizontal-list'>
            <li>
              <button   onClick={() => handleNext(0, 'filter')} className={indexFilter === 0 ? "Demo-button activeButton" : "Demo-button"}>Country</button>
            </li>
            <li>
              <button   onClick={() => handleNext(1, 'filter')} className={indexFilter === 1 ? "Demo-button activeButton" : "Demo-button"}>Year</button>
            </li>
            <li>
              <button   onClick={() => handleNext(2, 'filter')} className={indexFilter === 2 ? "Demo-button activeButton" : "Demo-button"}>Until Given Year</button>
            </li>
            <li>
              <button onClick={() => handleNext(3, 'filter')} className={indexFilter === 3 ? "Demo-button activeButton" : "Demo-button"}>Alphabetical Country</button>
            </li>
            <li>
              <button onClick={() => handleNext(4, 'filter')} className={indexFilter === 4 ? "Demo-button activeButton" : "Demo-button"}>Ordered by Year</button>
            </li>
          </ul>
          </div>
        <div className='image-container slideshow slideshow-big'>
          <img src={imageListFilter[indexFilter]} alt="Form to create a form" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>V</strong>alidation</h4>
          <p> lorem ipsum all forms are validated and SQL injection protected to make sure only valid objects are made. When invalid data is submitted an appropriate error message is shown to let the user know what went wrong. </p>
        </div>
        <div className='buttons-left-right'>
            <button   onClick={() => handleNext(0, 'validation')} className={indexValidation === 0 ? "Demo-button activeButton" : "Demo-button"}>1</button>
            <button   onClick={() => handleNext(1, 'validation')} className={indexValidation === 1 ? "Demo-button activeButton" : "Demo-button"}>2</button>
          </div>
        <div className='image-container '>
          
          <img src={imageListValidation[indexValidation]} alt="Form to create a form" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>A</strong>pi</h4>
          <p> lorem ipsum Rest controller, api, json response, error handling,. </p>
        </div>
        <div className='buttons-left-right'>
          <ul className='horizontal-list'>
          {/* APIOverview, APIError, APIAddCollector */}
            <li>
              <button   onClick={() => handleNext(0, 'API')} className={indexAPI === 0 ? "Demo-button activeButton" : "Demo-button"}>Overview</button>
            </li>
            <li>
              <button   onClick={() => handleNext(1, 'API')} className={indexAPI === 1 ? "Demo-button activeButton" : "Demo-button"}>Create</button>
            </li>
            <li>
              <button  onClick={() => handleNext(2, 'API')} className={indexAPI === 2 ? "Demo-button activeButton" : "Demo-button"}>Error handling</button>
            </li>
           
          </ul>
          </div>
        <div className='image-container slideshow '>
          
          <img src={imageListAPI[indexAPI]} alt="Form to create a form" className='center' />
        </div>
      </div>
      <div className='left'>
        <div className='text'>
          <h4> <strong>I</strong>nternationalisation</h4>
          <p> Lorem Ipsum. Internationalisation also known as i18n is applied to all text. One can either pick to get the English or the Dutch version of the site </p>
        </div>
        <div className='buttons-left-right'>
          <ul className='horizontal-list'>
         
            <li>
              <button  onClick={() => handleNext(0, 'i18n')} className={indexi18n === 0 ? "Demo-button activeButton" : "Demo-button"}>English</button>
            </li>
            <li>
              <button   onClick={() => handleNext(1, 'i18n')} className={indexi18n === 1 ? "Demo-button activeButton" : "Demo-button"}>Dutch</button>
            </li>
           
           
          </ul>
          </div>
        <div className='image-container slideshow '>
         
          <img src={imageListi18n[indexi18n]} alt="Form to create a form" className='center' />
        </div>
      </div>
      <div className='right'>
        <div className='text'>
          <h4> <strong>S</strong>ecurity</h4>
          <p> Lorem Ipsum. Login is possible with a username and password. The password is hashed. There are 2 roles for each user, either admin or a regular user. Only the admin role can create coins or collectors. When a regular user tries to acces the pages to add update or delete, they will be routed to an error page. </p>
        </div>
        <div className='image-container '>
          <img src={Login} alt="Form to create a form" className='center' />
        </div>
      </div>
      </div>
    </>
  );

}


export default ModalSpringboot