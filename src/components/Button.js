
import "./Button.scss"
// const Button =(props)=>{
//     console.log (props)
//     return (
//         <button 
//         className= {`boton ${props.color}`}
//         id="1">
//         {props.mensaje}
//         </button>
//     )    
//  }


 //Desestructurar las props 
 const Button= ({color, mensaje})=>{
 return (
     <button 
     className= {`boton ${color}`}
     id="1">
     {mensaje}
     </button>
 )
}
export default Button;

