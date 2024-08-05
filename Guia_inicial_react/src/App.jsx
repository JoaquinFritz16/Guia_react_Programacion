import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({ ...formData,
        [name]: value
     });
  };
  const validationName = (name) => {
    if (name.trim() === ""){
      return "El nombre no puede estar vacio"
    } else if (!/^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/.test(name)){
      return "El nombre solo puede contener letras válidas"
    } else if(name.length < 3){
      return "El nombre debe tener al menos 3 caracteres"
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const emaildefault = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const validName = validationName(formData.name)

    if (validName){
      alert(validName);
      return;
    }
    if (emaildefault.test(formData.email)){
        alert("Email valido");
    }
    else{
        alert("Email invalido");
    }
    console.log("Nombre: ", formData.name)
    console.log("Email: ", formData.email)
  }
  return (
    <>
    <h1>Ejercicio 1: Formularios</h1>
    <h3>Comprobacion de Nombre y Email</h3>
    <br />

      <form onSubmit={handleSubmit}>
        <input type='text' name="name"  onChange={handleChange} value={formData.name}></input>
        <input type='text' name="email"  onChange={handleChange} value={formData.email}></input>
        <button type='submit'>Enviar</button>
      </form>
    </>
  )
}

export default App
