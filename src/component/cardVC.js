import React from 'react'
import styleVC from '/home/nineleaps/project/src/card/style1.css'


const CardVC = () => {
  return (
   <>
<h1>Venture Capatlist</h1>
    <main className="page-content">
  <div className="card">
    <div className="content">
      <h2 className="title">VC 1</h2>
      <p className="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button className="btn">View Trips</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">VC 2</h2>
      <p className="copy">Plan your next beach trip with these fabulous destinations</p>
      <button className="btn">View Trips</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">VC 3</h2>
      <p className="copy">It's the desert you've always dreamed of</p>
      <button className="btn">Book Now</button>
    </div>
  </div>
  <div className="card">
    <div className="content">
      <h2 className="title">VC 4</h2>
      <p className="copy">Seriously, straight up, just blast off into outer space today</p>
      <button className="btn">Book Now</button>
    </div>
  </div>
</main>
</>
  )
}

export default CardVC;