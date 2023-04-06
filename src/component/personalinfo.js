import React from "react";
import useFormContext from "/home/nineleaps/project/src/component/hooks/Useformcontext.js";
import "/home/nineleaps/project/src/css/personalinfo.css";
const Entreprenur = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const { data, handleInput } = useFormContext();
  return (
    <>
      <div className="form-container">
        <form action="" onSubmit={handleSubmit}>
          <h1>Register yourself</h1>
          <br />
          <div>
            <label htmlFor="profileImage">Photo</label>
            <br></br>
            <input
              type="file"
              autoComplete="off"
              value={data.profileImage}
              onChange={handleInput}
              name="profileImage"
              id="profileImage"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="fname">Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.fname}
              onChange={handleInput}
              name="fname"
              id="fname"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.email}
              onChange={handleInput}
              name="email"
              id="email"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <br></br>
            <input
              type="tel"
              autoComplete="off"
              value={data.phone}
              onChange={handleInput}
              name="phone"
              id="phone"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.City}
              onChange={handleInput}
              name="City"
              id="City"
              placeholder="City"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={data.State}
              onChange={handleInput}
              name="State"
              id="State"
              placeholder="State"
              className="txtForm"
            />
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.Country}
              onChange={handleInput}
              name="Country"
              id="Country"
              placeholder="Country"
              className="txtForm"
            />
          </div>
        </form>
      </div>
    </>
  );
};
export default Entreprenur;