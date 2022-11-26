const Mensaje = (props)=>{
    return (
        <div>
            <h2 style={{color:props.color}}> {props.text} </h2>
            <br/>
            <h3>{props.text}</h3>
        </div>)
    
}

export default Mensaje;