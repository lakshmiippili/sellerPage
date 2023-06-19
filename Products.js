import { useState,useEffect } from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import ProductList from "./ProductList";


const Products = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const idChangeHandler = (event) => {
    setId(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    setProductList((prevList) => {
        return [
          ...prevList,
          { name: name.value, price: price.value, id: id.value, category: category.value },
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
          value={id.value}
          onChange={idChangeHandler}
        />
        <Input
          type="number"
          label="Selling Price"
          id="price"
          value={price.value}
          onChange={priceChangeHandler}
        />
        <Input
          type="text"
          label="Product Name"
          id="name"
          value={name.value}
          onChange={nameChangeHandler}
        />
        <label htmlFor="category">Category</label>
        <select
          name="category"
          id="category"
          value={category.value}
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
      <ul id="electronics">Electronics</ul>
      
      <ul id="food">Food</ul>

      <ul id="skincare">SkinCare</ul>
    </div>
  );
};

export default Products;
