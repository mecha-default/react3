
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
