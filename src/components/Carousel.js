import React from "react";

export default function Carousel() {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{height:"400px", overflow:"hidden",objectFit:"contain"}}
    >
      <div className="carousel-inner" id="carousel">
        <div className="carousel-item active">
          <img src={require('../img/food.jpg')} style={{"width":"36px"}}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={require('../img/food.jpg')} style={{"width":"36px"}}  className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={require('../img/food.jpg')} style={{"width":"36px"}} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
