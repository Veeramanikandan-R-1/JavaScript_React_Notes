import React, { useState } from 'react';
import './style.css';

export default function App() {
  const productDataInitial = [
    {
      id: 1,
      name: 'Apple iPhone 14',
      price: 79999,
      category: 'Electronics',
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23',
      price: 74999,
      category: 'Electronics',
    },
    {
      id: 3,
      name: 'Sony WH-1000XM4 Headphones',
      price: 19999,
      category: 'Accessories',
    },
    {
      id: 4,
      name: 'HP Pavilion Laptop',
      price: 59999,
      category: 'Electronics',
    },
    {
      id: 5,
      name: 'Nike Running Shoes',
      price: 4999,
      category: 'Footwear',
    },
    {
      id: 6,
      name: 'Adidas T-Shirt',
      price: 1499,
      category: 'Clothing',
    },
    {
      id: 7,
      name: 'Fastrack Analog Watch',
      price: 2299,
      category: 'Accessories',
    },
    {
      id: 8,
      name: 'Lenovo Tablet',
      price: 20999,
      category: 'Electronics',
    },
    {
      id: 9,
      name: 'Boat Airdopes 141',
      price: 1299,
      category: 'Accessories',
    },
    {
      id: 10,
      name: 'Puma Sports Shorts',
      price: 999,
      category: 'Clothing',
    },
  ];
  const [products, setProducts] = useState([...productDataInitial]);

  const changeHandler = (e) => {
    let value = e.target.value;
    if (!value) {
      setProducts(productDataInitial);
      return;
    }
    value = value.toLowerCase();
    console.log('value', value);
    const filteredResult = productDataInitial.filter((data) => {
      return (
        data.name.toLowerCase().includes(value) ||
        data.category.toLowerCase().includes(value) ||
        data.price.toString().includes(value)
      );
    });
    console.log('filteredResult', filteredResult);
    setProducts(filteredResult);
  };
  return (
    <div>
      <input name="search" onChange={changeHandler} placeholder="search" />
      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Price</td>
          <td>Category</td>
        </tr>
        <tbody>
          {products.map((data) => (
            <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.price}</td>
              <td>{data.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
