import React from 'react';
import '../styles/Testimonio.css'

//exportacion por nombre
//export function Testimonio(

function Testimonio(props){

  return (
    <div className='container-testimonio'>
      <img className='img-testimonio' 
        src={require(`../img/testimonio-${props.imagen}.png`)} 
        alt='Foto de Emma'
      />
      <div className='container-texto-testimonio'>
        <p className='nombre-testimonio'><strong>{props.nombre}</strong> in {props.pais}</p>
        <p className='puesto-testimonio'>{props.puesto} at <strong>{props.empresa}</strong></p>
        <p className='texto-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
}//fin Componente funcional

export default Testimonio;