import React, { Component, useState } from "react";

function AddRemoveInputField() {
    const [inputFields, setInputFields] = useState([{
        fullName: '',
        email: ''
    }]);
    const addInputField = () => {
        setInputFields([...inputFields, {
            fullName: '',
            email: '',
        }])
    }
    const removeInputFields = (index) => {
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);
    }
    const handleChange = (index, evnt) => {
        const { name, value } = evnt.target;
        const list = [...inputFields];
        list[index][name] = value;
        setInputFields(list);
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-8">
                    {
                        inputFields.map((data, index) => {
                            const { fullName, email } = data;
                            return (
                                <div className="row my-3" key={index}>
                                    <div className="col">
                                        <div className="form-group">
                                            <input type="text" onChange={(evnt) => handleChange(index, evnt)} value={fullName} name="fullName" className="txtForm" placeholder="Full Name" />
                                            <input type="email" onChange={(evnt) => handleChange(index, evnt)} value={email} name="email" className="txtForm" placeholder="Email Id" />
                                            <button className="btn" onClick="">Invite</button>
                                        </div>
                                    </div>
                                    <div className="col">
                                        {(inputFields.length !== 0) ? <button className="btn" onClick={removeInputFields}>x</button> : ''}
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="row">
                        <div className="col-sm-12">
                            <button className="btn " onClick={addInputField}>Add New</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-4">
            </div>
        </div>
    )
}
export default AddRemoveInputField;