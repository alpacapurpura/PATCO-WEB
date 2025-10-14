import React from 'react';

import '../css/BloqueImagen.css';

const BloqueImagen = (props) => {
  return (
    <div className={`op-bloque-image ${props.imagenRight ? 'cambiado' : ''}`}>
      <div
        className="op-imagen"
        style={{ backgroundImage: `url('${props.imagen}')` }}
      ></div>
      <div className="texto">{props.children}</div>
    </div>
  );
};

export default BloqueImagen;
