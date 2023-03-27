import React from 'react'
import '/home/nineleaps/project/src/card/card css/styleStartup.css'

const cardStartup = () => {
  return (
   <>
<h1 className='heading'>Startup</h1>
    <main class="page-content">
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 1</h2>
      <p class="copy">Check out all of these gorgeous mountain trips with beautiful views of, you guessed it, the mountains</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 2</h2>
      <p class="copy">Plan your next beach trip with these fabulous destinations</p>
      <button class="btn">View Trips</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 3</h2>
      <p class="copy">It's the desert you've always dreamed of</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
  <div class="card">
    <div class="content">
      <h2 class="title">Startup 4</h2>
      <p class="copy">Seriously, straight up, just blast off into outer space today</p>
      <button class="btn">Book Now</button>
    </div>
  </div>
</main>
</>
  )
}

export default cardStartup;