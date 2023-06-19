import { useState,useEffect } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ProductList from "./ProductList";


const Products = () => {
  const [nameState, setNameState] = useState("");
  const [idState, setIdState] = useState("");
  const [priceState, setPriceState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  const nameChangeHandler = (event) => {
    setNameState(event.target.value);
  };
  const idChangeHandler = (event) => {
    setIdState(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPriceState(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategoryState(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    setProductList((prevList) => {
        return [
          ...prevList,
          { name: nameState.value, price: priceState.value, id: idState.value, category: categoryState.value },
        ];
      });
  };
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const product = JSON.parse(localStorage.getItem("productList"));
    if (product) setProductList(product);
  }, []);
 
  useEffect(() => {
    localStorage.setItem("productList", JSON.stringify(productList));
  }, [productList]);
  const deleteProduct = (id) => {
    let products =JSON.parse(localStorage.getItem('productList'))
    products=products.filter((product)=> product.id!==id)
    setProductList(products);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <Input
          type="number"
          label="Product Id"
          id="productId"
          value={idState.value}
          onChange={idChangeHandler}
        />
        <Input
          type="number"
          label="Selling Price"
          id="price"
          value={priceState.value}
          onChange={priceChangeHandler}
        />
        <Input
          type="text"
          label="Product Name"
          id="name"
          value={nameState.value}
          onChange={nameChangeHandler}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={categoryState.value}
          onChange={categoryChangeHandler}
        >
          <option value="electronics">Electronics</option>
          <option value="skincare">SkinCare</option>
          <option value="food">Food</option>
        </select>
        <Button type="submit" label="Add Product" />
      </form>
      <h4>Products</h4>
      <ProductList products={productList} deleteProduct={deleteProduct} />
      {/* <ul id="electronics">Electronics</ul>
      
      <ul id="food">Food</ul>

      <ul id="skincare">SkinCare</ul> */}
    </div>
  );
};

export default Products;
