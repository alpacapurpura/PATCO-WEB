import React from 'react';

import BloqueImagen from './BloqueImagen';

import Producto1 from '../assets/conocenos/producto1.jpg';
import Producto2 from '../assets/conocenos/producto2.jpg';
import Producto3 from '../assets/conocenos/producto3.jpg';
import Producto4 from '../assets/conocenos/producto4.png';

import Inicio2 from '../assets/inicio/inicio2.jpg';
import Inicio3 from '../assets/inicio/inicio3.jpg';

import '../css/Responsabilidad.css';

const Conocenos = () => {
  return (
    <div className="op-body">
      <div className="op-section">
        <div className="op-barra">
          <span className="op-title">Producto</span>
          <BloqueImagen imagen={Producto1}>
            <span className="op-subtitle">Cacao Nativo</span>
            <p>
              El VRAEM es conocido por sus variedades nativas de cacao de alto
              valor, con el objetivo de conservar nuestras variedades nativas,
              la mayor&iacute;a de nuestros cultivos de cacao est&aacute;n
              establecidos dentro de sistemas agroforestales, teniendo una
              diversidad de especies de nativas ya sean maderables o no
              maderables, entre ellas: cedro, ishpingo, casta&ntilde;a, aguaje,
              etc. y especies animales, entre ellos: a&ntilde;ujes, monos,
              ardillas y aves. Nuestros cultivos de cacao se ubican en la selva
              baja del Per&uacute;, entre los 300 – 600 msnm, y con suelos ricos
              en materia org&aacute;nica, lo cual le brindan a nuestros granos
              la calidad y el sabor ex&oacute;tico que los distingue.
            </p>
          </BloqueImagen>
          <BloqueImagen imagen={Producto2} imagenRight>
            <span className="op-subtitle">Grano seco de cacao</span>
            <p>
              Nuestros granos de cacao, pasan por un proceso artesanal de
              fermentaci&oacute;n y secado, muchos de nuestros agricultores se
              encargan de fermentar y secar el cacao de una manera artesanal en
              su propia chacra, cumpliendo siempre con los par&aacute;metros de
              inocuidad del producto
            </p>
          </BloqueImagen>
          <BloqueImagen imagen={Producto3}>
            <span className="op-subtitle">Pastas 100% de cacao</span>
            <p>
              Pastas de cacao sin aditivos, ni preservantes, ideal para la
              elaboraci&oacute;n de bebidas calientes y chocolater&iacute;a
              fina. Notas de cata: intensidad media a cacao, notas frutales
              c&iacute;tricas.
            </p>
          </BloqueImagen>
          <BloqueImagen imagen={Inicio2} imagenRight>
            <span className="op-subtitle">Producci&oacute;n</span>
            <p>
              Las organizaciones productoras, en su mayor&iacute;a cuentan con
              parcelas en producci&oacute;n instaladas bajo sistemas
              agroforestales - SAF, realizan un manejo en lo posible
              t&eacute;cnico, en las que priorizan abonamientos que sincronizan
              con las podas y el manejo integrado de plagas - TAPS, conservando
              la fertilidad natural del suelo y protegiendo las fuentes de agua.
            </p>
          </BloqueImagen>
          <BloqueImagen imagen={Inicio3}>
            <span className="op-subtitle">Post cosecha</span>
            <p>
              El proceso post cosecha que realizan las productoras de cacao en
              el valle, es acopio en módulos de post cosecha centralizado de la
              organizaci&oacute;n, que consisten en &aacute;rea de
              recepci&oacute;n de cacao en baba, &aacute;rea de
              fermentaci&oacute;n, &aacute;rea de secado, &aacute;rea de
              almac&eacute;n y despacho. Donde el producto cosechado pasa por
              estrictos protocolos de fermentaci&oacute;n, secado, control de
              calidad y almacenamiento del grano seco de alta calidad para
              mercados especiales.
            </p>
          </BloqueImagen>
          <BloqueImagen imagen={Producto4} imagenRight>
            <span className="op-subtitle">Comercializaci&oacute;n</span>
            <p>
              Pacific Alliance Trading Company S.A.C aspira lograr comercializar
              el 100% de la producci&oacute;n de cacao del valle hacia los
              mercados especiales de exportación con certificaci&oacute;n
              Org&aacute;nica y Comercio Justo.
            </p>
          </BloqueImagen>
        </div>
      </div>
    </div>
  );
};

export default Conocenos;
