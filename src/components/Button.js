
import "./Button.css"
const Button =(props)=>{
    console.log (props)
    return (
        <button 
        className= {`boton ${props.color}`}
        id="1">
        {props.mensaje}
        </button>
    )
}
export default Button;

