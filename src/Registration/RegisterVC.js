import React, { useState } from "react";
import "/home/nineleaps/project/src/css/registervc.css";
const Registervc = () => {
  const [userregisteration, setuserregisteration] = useState({
    vcname: "",
    vclinkedin: "",
    email: "",
    contact: "",
    expertise: "",
    Bio: "",
    location: "",
    city: "",
    Buildingno: "",
    street: "",
    state: "",
    country: "",
    pin: "",
  });
  const [records, setRecords] = useState([]);
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setuserregisteration({ ...userregisteration, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const recordData = { ...userregisteration };
    console.log(records);
    setRecords([...records, recordData]);
    // setuserregisteration({Profilepic:'',vcname:'',vclinkedin:'',
    // email:'',
    // contact:'',
    // expertise:'',
    // Bio:'',
    // location:"",
    // city:'',
    // Buildingno:'',
    // street:'',
    // state:'',
    // country:'',
    // pin:''
    // })
    // console.log(records);
  };
  return (
    <>
      <div className="main">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register as Investor</h2>
          {/* <div>
         <ProfilePic/>
    </div> */}
          <div>
            <label htmlFor="vcname">Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="on"
              value={userregisteration.vcname}
              onChange={handleInput}
              name="vcname"
              id="vcname"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.email}
              onChange={handleInput}
              name="email"
              id="email"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="vclinkedin">Linkedin</label>
            <br></br>
            <input
              type="url"
              autoComplete="off"
              value={userregisteration.vclinkedin}
              onChange={handleInput}
              name="vclinkedin"
              id="vclinkedin"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="contact">Phone</label>
            <br></br>
            <input
              type="tel"
              autoComplete="off"
              value={userregisteration.contact}
              onChange={handleInput}
              name="contact"
              id="contact"
              minLength="10"
              maxLength="10"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="expertise">Expertise</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={userregisteration.expertise}
              onChange={handleInput}
              name="expertise"
              id="expertise"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="Bio">Bio</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={userregisteration.Bio}
              onChange={handleInput}
              name="Bio"
              id="Bio"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input 
              type="text"
              autoComplete="off"
              value={userregisteration.Buildingno}
              onChange={handleInput}
              name="Buildingno"
              id="Buildingno"
              placeholder="Building no"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.street}
              onChange={handleInput}
              name="street"
              id="street"
              placeholder="street"
              className="txtForm"
            />
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.city}
              onChange={handleInput}
              name="city"
              id="city"
              placeholder="city"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.state}
              onChange={handleInput}
              name="state"
              id="state"
              placeholder="state"
              className="txtForm"
            />
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.pin}
              onChange={handleInput}
              name="pin"
              id="pin"
              placeholder="pin"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={userregisteration.country}
              onChange={handleInput}
              name="country"
              id="country"
              placeholder="country"
              className="txtForm"
            />
          </div>
          <button className="btn" onClick="submit">
            Register{" "}
          </button>
        </form>
      </div>
    </>
  );
};
export default Registervc;