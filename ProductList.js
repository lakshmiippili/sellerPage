import Button from "../UI/Button"
const ProductList =(props)=>{
    return (
        
        <ul >
            {props.products.map(product=>(
                <li key={product.id}>
                {product.name}-{product.price} -{product.category}
                <Button value={product.id} onClick={props.onClick}>Delete</Button>
            </li>))}    
        </ul>
    )
}

export default ProductList