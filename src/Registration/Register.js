import React from "react";
import AddRemoveInputField from "/home/nineleaps/project/src/component/AddRemoveInputField.js";
import useFormContext from "/home/nineleaps/project/src/component/Context/FormContext.js";
import "/home/nineleaps/project/src/css/Startup.css";
const Register = () => {
  const { data, handleInput } = useFormContext();
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="form-container-st">
        <form action="" onSubmit={handleSubmit}>
          <h2>Register as Startup</h2>
          <div>
            <label htmlFor="Startupname">Startup Name</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.Startupname}
              onChange={handleInput}
              name="Startupname"
              id="Startupname"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="linkedin">Linkedin</label>
            <br></br>
            <input
              type="url"
              autoComplete="off"
              value={data.linkedin}
              onChange={handleInput}
              name="linkedin"
              id="linkedin"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="Websiteurl">Website url</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.Websiteurl}
              onChange={handleInput}
              name="Websiteurl"
              id="Websiteurl"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="startupSummary">Summary</label>
            <br></br>
            <input
              type="textArea"
              autoComplete="off"
              value={data.startupSummary}
              onChange={handleInput}
              name="startupSummary"
              id="startupSummary"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="Bio">Bio</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={data.Bio}
              onChange={handleInput}
              name="Bio"
              id="Bio"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="pitchDeck">pitchDeck</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={data.pitchDeck}
              onChange={handleInput}
              name="pitchDeck"
              id="pitchDeck"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="seriesOfFunding">seriesOfFunding</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={data.seriesOfFunding}
              onChange={handleInput}
              name="seriesOfFunding"
              id="seriesOfFunding"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="currentValuation">currentValuation</label>
            <br></br>
            <input
              type="textarea"
              autoComplete="off"
              value={data.currentValuation}
              onChange={handleInput}
              name="currentValuation"
              id="currentValuation"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="domain">Domain</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.domain}
              onChange={handleInput}
              name="domain"
              id="domain"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <br></br>
            <input
              type="text"
              autoComplete="off"
              value={data.Buildingno}
              onChange={handleInput}
              name="Buildingno"
              id="Buildingno"
              placeholder="Buildingno"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={data.street}
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
              value={data.city}
              onChange={handleInput}
              name="city"
              id="city"
              placeholder="city"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={data.state}
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
              value={data.pin}
              onChange={handleInput}
              name="pin"
              id="pin"
              placeholder="pin"
              className="txtForm"
            />
            <input
              type="text"
              autoComplete="off"
              value={data.country}
              onChange={handleInput}
              name="country"
              id="country"
              placeholder="country"
              className="txtForm"
            />
          </div>
          <div>
            <label htmlFor="cofounder" name="cofounder">
              Add Cofounders
            </label>
            <AddRemoveInputField />
          </div>
        </form>
      </div>
    </>
  );
};
export default Register;