import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormField from '../components/FormField';

function Create() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        prompt: '',
        photo: ''
    })
    const [generationImg, setGeneratingImg] = useState(false);
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        try{
            setForm({...form,[e.target.name]:e.target.value} )
        }
        catch(err){console.log(err)}
     }
    const handleSubmit = () => { }
    const generateImg = async() =>{
        if(form.prompt){
            try{
                const response = await fetch('http://localhost:4000/api/v1/dalle',{
                    method : 'POST',
                    headers:{
                        'Content-Type' : 'application/json',
                    },
                    body : JSON.stringify({prompt : form.prompt}),
                })
                const data = await response.json();
                setForm({...form,photo:`data:image/jpeg,${data.photo}`})
            } catch(err){
                console.log(err);
            }
        }
    }
    return (
        <section className='ms-auto' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <h1 >Create Image</h1>
            <p style={{color:'grey'}}>Image Generation with ImagiGen</p>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',background:'#F6F4EB',padding:'20px',borderRadius:'25px'}}>
                <form className="mt-16 max-w-3xl" style={{ margin: 'auto 0' }} onSubmit={handleSubmit}>
                    <div className='container-fluid'>
                        <FormField
                            LabelName="Your Name"
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            value={form.name}
                            handleChange={handleChange}
                        />
                    </div>
                    <div className='container-fluid'><FormField
                        LabelName="Prompt"
                        type="text"
                        name="prompt"
                        placeholder="Waiter on hotel roof"
                        value={form.prompt}
                        handleChange={handleChange}
                    />
                    </div>
                </form>
                <div style={{margin:'40px auto'}}>
                    <img style={{height:'200px',width:'300px'}}src={form.photo} alt={form.prompt}/>
                </div>
                <button style={{background:'green', color:'white',borderRadius:'20px', width:'70%',border:'none',padding:'10px'}} onClick={generateImg}>Generate</button>
            </div>
            <div style={{marginTop:'20px'}}>
                Share Your Content With the Community
            </div>
            <button style={{background:'purple',color:'white',borderRadius:'20px', width:'30%',border:'none',padding:'10px'}}>Share</button>
        </section>
    )
}

export default Create
