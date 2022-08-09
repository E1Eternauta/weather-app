import React from 'react';
import CardTemp from './CardTemp';

export default function Card({max, min, name, img, onClose}) {
  // acá va tu código
  function handleOnClose(){
    if(typeof onClose === 'function') onClose();
  }

  return( 
    <div>
      <button onClick={handleOnClose}>X</button>
      <span>{name}</span>
      <CardTemp label='Min' value={min} />
      <CardTemp label='Max' value={max} />
      <img 
        src={`http://openweathermap.org/img/wn/${img}@2x.png`}
        alt='Icono del clima'/>
    </div>
  );
}