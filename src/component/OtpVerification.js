import React from 'react'
import "/home/nineleaps/project/src/css/button.css"
import "/home/nineleaps/project/src/css/txtForm.css"
function Otp() {

    const divShadow = {
        
        boxShadow: '7px 7px 24px 4px #737373',
        margin: '4em',
        padding: '1em',
        width:'500px'
      }; 
          
          
    return (
        <>
            <h1>Verify yourself!</h1>
            <div className='container' style={divShadow} >

                <div className="OTP-Verify">
                    <label className='label'>Enter Your OTP</label>
                    <input className='txtForm'
                        type="text"
                        name="otp"
                        id='otp'
                        placeholder='OTP'
                    />
                </div>

                <div>
                    <button class="btn" type="button">Verify</button>
                </div>

            </div>
        </>
    )
}

export default Otp;
