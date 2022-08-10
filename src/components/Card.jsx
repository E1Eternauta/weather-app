import React from 'react';
import CardTemp from './CardTemp';
import PropTypes from 'prop-types'
import {IoCloseCircleOutline} from 'react-icons/io5'
import styles from  './Card.module.css'

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose === 'function') onClose();
  }

  return( 
    <div className={styles.card}>
      <button onClick={handleOnClose} className={styles.closeButton}>
        <IoCloseCircleOutline />
      </button>
      <span className={styles.cityName}>{name}</span>
      <CardTemp label='Min' value={min} />
      <CardTemp label='Max' value={max} />
      <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt='Icono del clima'/>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  img: PropTypes.string,
  onClose: PropTypes.func,
}