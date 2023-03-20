// import React, { useState, useEffect, useRef } from 'react'
  

// const INITIAL_COUNT = 30
// const twoDigits = (num) => String(num).padStart(2, '0')


// function Count() {

//     const [secondsRemaining, setSecondsRemaining] = useState(INITIAL_COUNT)
//     const secondsToDisplay = secondsRemaining % 60
//     const minutesRemaining = (secondsRemaining - secondsToDisplay) / 60
//     const minutesToDisplay = minutesRemaining % 60
//     // const hoursToDisplay = (minutesRemaining - minutesToDisplay) / 60

//     const handleStart = async () => {
//         setStatus(STATUS.STARTED)
//         setSecondsRemaining(INITIAL_COUNT)
//     }

//     const STATUS = {
//         STOPPED: <b><a type="button" onClick={handleStart} class="text-danger" style={{ marginLeft: "160px" }}></a></b>,
//     }

//     const [status, setStatus] = useState(STATUS.STOPPED)
//     useInterval(
//         () => {
//             if (secondsRemaining > 0) {
//                 setSecondsRemaining(secondsRemaining - 1)
//             } else {
//                 setStatus(STATUS.STOPPED)
//             }
//         },
//         status === STATUS.STARTED ? 1000 : null,
//         // passing null stops the interval
//     )
//     function useInterval(callback, delay) {
//         const savedCallback = useRef()

//         // Remember the latest callback.
//         useEffect(() => {
//             savedCallback.current = callback
//         }, [callback])

//         // Set up the interval.
//         useEffect(() => {
//             function tick() {
//                 savedCallback.current()
//             }
//             if (delay !== null) {
//                 let id = setInterval(tick, delay)
//                 return () => clearInterval(id)
//             }
//         }, [delay])
//     }

//     return (
//         <>
//         backg
//             {/* <h1>Verify yourself!</h1>
//             <form>
//                 <div className="OTP-Verify">
//                     <label className='label'>Enter Your OTP</label>
//                     <input className='input'
//                         type="text"
//                         name="otp"
//                         id='otp'
//                         placeholder='OTP'
//                     />
//                 </div>
//                 <div>
//                     <button type="button">Verify</button>
//                 </div>
//             </form> */}

//             {status == STATUS.STARTED ?

//                 <div><b className='text-success'> Resend OTP in</b>

//                     <b className='ml-2 text-danger'>{twoDigits(minutesToDisplay)}:
//                         {twoDigits(secondsToDisplay)}</b>
//                 </div> :
//                 status
//             }
//         </>
//     )
// }
// export default Count;
