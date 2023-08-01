import React from 'react'

function FormField({LabelName, type, name, placeholder, value, handleChange}) {
  return (
    <div className='container-fluid' style={{margin:'10px 0'}}>
      <label htmlFor={name} style={{marginBottom:'10px',width:'100%',color:'grey'}} >{LabelName}</label>
      <input style={{width:'100%',borderRadius:'20px',padding:'10px 25px'}}name={name} id={name}type={type} placeholder={placeholder} value={value} onChange={handleChange} required/>
    </div>
  )
}

export default FormField
