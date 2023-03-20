
import React,{useState} from 'react';
// import Button from '../button';
// import '/home/nineleaps/project/src/css/register.css';
import AddRemoveInputField from '/home/nineleaps/project/src/component/AddRemoveInputField.js';
const Register = () => {
  const [userregisteration,setuserregisteration]=useState({
    Startupname:'',
    linkedin:"",
    startupSummary:"",
    domain:"",
    city:'',
    Buildingno:'',
    street:'',
    state:'',
    country:'',
    pin:'',
    Cofounder:'',
    Websiteurl:'',
    // SeriesofFunding:"",
    // currentValuation:'',
    pitchDeck:''
  });
  const [records,setRecords]=useState([]);
  const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setuserregisteration({...userregisteration,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const recordData={...userregisteration}
    console.log(records);
    setRecords([...records,recordData]);
    setuserregisteration({Startupname:'',
    linkedin:"",
    startupSummary:"",
    domain:"",
    city:'',
    Buildingno:'',
    street:'',
    state:'',
    country:'',
    pin:'',
    Cofounder:'',
    Websiteurl:'',
  })
    console.log(records);
  }
  return (
    <>
    <form action="" onSubmit={handleSubmit}>
<h2>Register as Startup</h2>
    {/* <div className='StartupLogo'>
         <ProfilePic/>
    </div> */}
    <div>
      <label htmlFor='Startupname'>Startup Name</label><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.Startupname} onChange={handleInput}
      name="Startupname" id="Startupname" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='linkedin'>Linkedin</label><br></br>
      <input type="url" autoComplete='off'
      value={userregisteration.linkedin} onChange={handleInput}
      name="linkedin" id="linkedin" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='Websiteurl'>Website url</label><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.Websiteurl} onChange={handleInput}
      name="Websiteurl" id="Websiteurl" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='startupSummary'>Summary</label><br></br>
      <input type="textArea" autoComplete='off'
      value={userregisteration.startupSummary} onChange={handleInput}
      name="startupSummary" id="startupSummary" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='Bio'>Bio</label><br></br>
      <input type="textarea" autoComplete='off'
      value={userregisteration.Bio} onChange={handleInput}
      name="Bio" id="Bio" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='domain'>Domain</label><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.domain} onChange={handleInput}
      name="domain" id="domain" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='location'>Location</label><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.Buildingno} onChange={handleInput}
      name="Buildingno" id="Buildingno" placeholder='Buildingno' className='txtForm'/>
      <input type="text" autoComplete='off'
      value={userregisteration.street} onChange={handleInput}
      name="street" id="street" placeholder='street' className='txtForm'/><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.city} onChange={handleInput}
      name="city" id="city" placeholder='city' className='txtForm'/>
      <input type="text" autoComplete='off'
      value={userregisteration.state} onChange={handleInput}
      name="state" id="state" placeholder='state' className='txtForm'/><br></br>
      <input type="text" autoComplete='off'
      value={userregisteration.pin} onChange={handleInput}
      name="pin" id="pin" placeholder='pin' className='txtForm'/>
      <input type="text" autoComplete='off'
      value={userregisteration.country} onChange={handleInput}
      name="country" id="country" placeholder='country' className='txtForm'/>
    </div>
  <div>
    <label htmlFor='cofounder'>Add Cofounders</label>
    <AddRemoveInputField />
    </div>
    <button className="button" onClick="submit">Register</button>
    </form>
    {/* <div>
      {
        records.map((curEle)=>{
          const {id,username,Linkedin,password,cpassword}=curEle
          return(
            <div className='showData' key={curEle.id}>
              <p>{username}</p>
              <p>{Linkedin}</p>
              <p>{password}</p>
              <p>{cpassword}</p>
            </div>
          )
        })
      }
    </div> */}
    </>
  )
}
export default Register;