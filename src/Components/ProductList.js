
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Style/ProductList.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:2700/data');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post('http://localhost:2700/data', { name, price, });
      setProducts([...products, response.data]);
      setName('');
       setPrice('');
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:2700/data/${id}`);
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setName(product.name);
    setPrice(product.price);
  };

  const handleUpdateProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:2700/data/${editingProduct.id}`,
        {
          name,
          price,
        }
      );
      setProducts(
        products.map((product) =>
          product.id === editingProduct.id ? response.data : product
        )
      );
      setName('');
      setPrice('');
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div >
     <div className='datashow' >
     {/* <h2>Product List</h2> */}

   
    {products.map((product) => (
    <li key={product.id}>
      {product.name} - ${product.price}
      <button onClick={() => handleEditProduct(product)}>Edit</button>
      <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
    </li>
     ))}
    
     </div>

    <div className='listshow'> 
     <h3>{editingProduct ? 'Edit Product' : 'Add Products'}</h3>
      <input  type="text" placeholder="Name"
        value={name} onChange={(e) => setName(e.target.value)} />
      
      <input  type="number" placeholder="Price"
        value={price} onChange={(e) => setPrice(e.target.value)} />

      {editingProduct ? (
        <button onClick={handleUpdateProduct}>Update Product</button>
      ) : (
        <button onClick={handleAddProduct}>Add Product</button>
      )}
      </div>


    </div>
  );
};

export default ProductList;
