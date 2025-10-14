import React from 'react';

const Slide = (props) => {
  return (
    <div
      className="op-slide"
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {/* <div className="op-slide-data">
        <h2>{props.title}</h2>
      </div> */}
    </div>
  );
};

export default Slide;
