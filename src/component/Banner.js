import React from 'react'
import photo1 from '/home/nineleaps/project/src/Assets/photo1.jpg'
import photo2 from '/home/nineleaps/project/src/Assets/photo2.jpg'
import photo3 from '/home/nineleaps/project/src/Assets/photo3.jpg'

const Banner = () => {
  return (
    <>
    <div><div id="carouselExampleIndicators" className="carousel slide">
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src={photo1} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={photo2} className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src={photo3} className="d-block w-100" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div></div>
  </>
  )
}

export default Banner