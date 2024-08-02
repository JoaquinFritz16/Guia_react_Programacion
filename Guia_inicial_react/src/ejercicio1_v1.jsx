import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData,
        [name]: value
     });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const emaildefault = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (emaildefault.test(formData.email)){
        alert("Email valido");
    }
    else{
        alert("Email invalido");
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handleChange} value={formData.name}></input>
        <input type='text' onChange={handleChange} value={formData.email}></input>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
