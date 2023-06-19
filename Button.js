const Button = (props)=>{
    return(
    <button type={props.type} onClick={props.onClick}>{props.label}</button>)
}

export default Button