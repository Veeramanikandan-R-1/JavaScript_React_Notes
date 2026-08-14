// problem
/*
React Task: Build a product search feature that displays matching products in a table. The search functionality should support both partial and exact product name matches, providing a Google-like search experience.
Below JSON Object for product data.
const productData = [
 {
   "id": 1,
   "name": "Apple iPhone 14",
   "price": 79999,
   "category": "Electronics"
 },
 {
   "id": 2,
   "name": "Samsung Galaxy S23",
   "price": 74999,
   "category": "Electronics"
 },
 {
   "id": 3,
   "name": "Sony WH-1000XM4 Headphones",
   "price": 19999,
   "category": "Accessories"
 },
 {
   "id": 4,
   "name": "HP Pavilion Laptop",
   "price": 59999,
   "category": "Electronics"
 },
 {
   "id": 5,
   "name": "Nike Running Shoes",
   "price": 4999,
   "category": "Footwear"
 },
 {
   "id": 6,
   "name": "Adidas T-Shirt",
   "price": 1499,
   "category": "Clothing"
 },
 {
   "id": 7,
   "name": "Fastrack Analog Watch",
   "price": 2299,
   "category": "Accessories"
 },
 {
   "id": 8,
   "name": "Lenovo Tablet",
   "price": 20999,
   "category": "Electronics"
 },
 {
   "id": 9,
   "name": "Boat Airdopes 141",
   "price": 1299,
   "category": "Accessories"
 },
 {
   "id": 10,
   "name": "Puma Sports Shorts",
   "price": 999,
   "category": "Clothing"
 }
]
*/

// solution
import React, { useEffect, useMemo, useState } from 'react';

const productData = [
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

function App() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');

  // Debounce search value
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Filter products
  const filteredProducts = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();

    if (!query) {
      return productData;
    }

    return productData.filter((product) =>
      product.name.toLowerCase().includes(query)
    );
  }, [debouncedSearch]);

  return (
    <div>
      <h2>Product Search</h2>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
          </tr>
        </thead>

        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default App;