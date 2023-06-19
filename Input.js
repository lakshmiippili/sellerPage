const Input=(props) =>{
    return (<div>
        <label htmlFor={props.id}>{props.label}</label>
        <input type={props.type} value={props.value} onChange={props.onChange}></input>
        </div>)
}


export default Input