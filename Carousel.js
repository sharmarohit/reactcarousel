import React, { useState, useEffect } from "react";

const Carousel = ({ delay, children }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const next = (index + 1) % `${children.length}`;
    const id = setTimeout(() => setIndex(next), delay);
    return () => clearTimeout(id);
  });

  return (
    <div className="carousel">
      <div className="btn btn-success btn-next" onClick={() => setIndex(index === children.length-1 ? 0 : index+1)}>Next</div>
      {children && <div id="image">{children[index]}</div>}
      <div className="btn btn-success btn-previous" onClick={() => setIndex(index === 0 ? children.length-1 : index-1)}>Previous</div>
    </div>
  );
};

export default Carousel;
