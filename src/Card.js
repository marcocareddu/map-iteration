import React from "react";

const Card = ({url, title, price, username}) => {
  const handleClick = () => {
    console.log(`Hai cliccato su ${title}`)
    alert(`Hai cliccato su ${title}`)
  }

  return (
    <article className="col-3 d-flex flex-column justify-content-center align-items-center">
      <img src={url} alt="immagine di card" className="img-fluid" />
      <div className="text-center w-100">
        <h6>{title}</h6>
        <div className="divisore my-3"></div>
        <h5 className="price fw-bold">{price}</h5>
        <h6>{username}</h6>
        <p className="timer fw-bold">00:05</p>
        <div onClick={handleClick} className="btn btn-success">PUNTA</div>
      </div>
    </article>
  );
};

export default Card;
