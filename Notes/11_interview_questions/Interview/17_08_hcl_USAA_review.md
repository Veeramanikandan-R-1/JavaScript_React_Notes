taken by Alagu Ayyapan (50mins) - answered all questions
feedback: improve using advanced sytaxes in program solving

1. Quick introduction about yourself ?
2. why we use react and list advantages ?
3. what are all hooks used in the project ?
4. Explain redux toolkit
5. ever used material ui / bootstrap or other css frameworks ?
6. how confident you are in JS
7. recent challenges faced and how you addressed?

---

JS problem

Question:
const users = [
    { name: "A", age: 23 },
    { name: "B", age: 27 },
    { name: "C", age: 35 },
    { name: "D", age: 42 },
    { name: "E", age: 19 },
];

Output:
{
    "10-19": [{ name: "E", age: 19 }],
        "20-29": [
            { name: "A", age: 23 },
            { name: "B", age: 27 }
        ],
            "30-39": [{ name: "C", age: 35 }],
                "40-49": [{ name: "D", age: 42 }]
}

---

React Problem:

Question

Using below input show them in table and add search functionality, in the same field user should be able to filter using name or price or category

input =
    [
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