
import './App.css';
import Button from "./components/Button"

const App =()=>{
 
  return (
    <div className='conteiner'>
      <h1>Hola</h1>
      <Button
      color="rojo"
      mensaje="chau"
      />
       <Button
      color="verde"
      mensaje="hola"
      />
    </div>
  )
}

export default App;


//DESESTRUCTURACION JS

// //Objeto 
// const persona ={
//   nombre: "jacques"
//   apellido: "darrida"
//   profesion: "psicologo"

// }
// //Desestructuracion 
//  const {nombre, profesion}= persona 

//  // es equivalente  en Js a 
//  const nombre = persona.nombre
//  const profesion= persona.profesion 


