import React,{ useState} from 'react';
const Entreprenur = () => {
    const [entrepreneurs,setEntrepreneurs]=useState({
            fname:"",
            email:"",
            phone:"",
            profileImage:"",
            city:'',
            state:'',
            country:'',
    });
    const [records,setRecords]=useState([]);
const handleInput=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    console.log(name,value);
    setEntrepreneurs({...entrepreneurs,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    const recordData={...entrepreneurs}
    console.log(records);
    setRecords([...records,recordData]);
  }
  return(
    <>
 <form action="" onSubmit={handleSubmit}>
<h1>Register yourself</h1>
<br/>
<div>
      <label htmlFor='profileImage'>Photo</label><br></br>
      <input type="file" autoComplete='off'
      value={entrepreneurs.profileImage} onChange={handleInput}
      name="profileImage" id="profileImage" className='txtForm'/>
      </div>
    <div>
      <label htmlFor='fname'>Name</label><br></br>
      <input type="text" autoComplete='off'
      value={entrepreneurs.fname} onChange={handleInput}
      name="fname" id="fname" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='email'>Email</label><br></br>
      <input type="text" autoComplete='off'
      value={entrepreneurs.email} onChange={handleInput}
      name="email" id="email" className='txtForm'/>
    </div>
    <div>
      <label htmlFor='phone'>Phone</label><br></br>
      <input type="tel" autoComplete='off'
      value={entrepreneurs.phone} onChange={handleInput}
      name="phone" id="phone" className='txtForm'/>
      </div>
      
<div>
      <label htmlFor='location'>Location</label><br></br>
      <input type="text" autoComplete='off'
      value={entrepreneurs.city} onChange={handleInput}
      name="city" id="city" placeholder='city' className='txtForm'/>
      <input type="text" autoComplete='off'
      value={entrepreneurs.state} onChange={handleInput}
      name="state" id="state" placeholder='state' className='txtForm'/><br></br>
    
      <input type="text" autoComplete='off'
      value={entrepreneurs.country} onChange={handleInput}
      name="country" id="country" placeholder='country' className='txtForm'/>
    </div>
<div>
    <button className="button" onClick="submit">Register</button>
    </div>
    </form>
    </>
  )
}
export default Entreprenur;