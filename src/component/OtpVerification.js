
import React, { useState } from "react";
import axios from "axios";
import "/home/nineleaps/project/src/css/otp.css";
function Otp() {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [otpSent, setOTPSent] = useState(false);
  const [otpVerified, setOTPVerified] = useState(false);
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleOTPChange = (event) => {
    setOTP(event.target.value);
  };
  const handleSendOTP = () => {
    axios
      .post("/api/sendOTP", { email })
      .then((response) => {
        setOTPSent(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleVerifyOTP = () => {
    axios
      .post("/api/verifyOTP", { email, otp })
      .then((response) => {
        setOTPVerified(true);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
  <div className="otpv">
  <div className="veri">
    <h1 >Verify Yourself!</h1>
    </div>
    <div className="Otp">
      <h4>Enter your email</h4>
      <input
        type="text"
        className="Input"
        value={email}
        onChange={handleEmailChange}
        />
      {!otpSent && (
        <button onClick={handleSendOTP} className="submit">
          Send OTP
        </button>
      )}
      {otpSent && !otpVerified && (
        <div>
          <h1>Enter OTP:</h1>
          <input type="text" value={otp} onChange={handleOTPChange} />
          <button onClick={handleVerifyOTP}>Verify OTP</button>
        </div>
      )}
      {otpVerified && <h1>OTP Verified Successfully!</h1>}
    </div>
      </div>
      
  );
}
export default Otp;
