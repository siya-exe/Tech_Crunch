const products = [
{
id: 1,
name: "iPhone 15 Pro",
price: 999,
category: "phones",
image: "https://via.placeholder.com/300x200/white?text=iPhone+15+Pro",
description: "The latest iPhone with amazing camera and performance"
},

{
id: 2,
name: "MacBook Air",
price: 1199,
category: "laptops",
image: "https://via.placeholder.com/300x200/white?text=MacBook+Air",
description: "The latest MacBook Air with M2 chip and stunning Retina display"
},

{
id: 3,
name: "AirPods Pro",
price: 249,
category: "accessories",
image: "https://via.placeholder.com/300x200/white?text=AirPods+Pro",
description: "The latest AirPods Pro with active noise cancellation and immersive sound"
},

{
id: 4,
name: "Samsung Galaxy S24",
price: 899,
category: "Phones",
image: "https://via.placeholder.com/300x200/white?text=Galaxy+S24",
description: "The latest Galaxy S24 with stunning display and powerful performance"
},

{
id: 5,
name: "Dell Laptop",
price: 799,
category: "Laptops",
image: "https://via.placeholder.com/300x200/white?text=Dell+Laptop",
description: "The latest Dell Laptop with powerful performance and sleek design"
},

{
id: 6,
name: "Wireless Mouse",
price: 49,
category: "Accessories",
image: "https://via.placeholder.com/300x200/white?text=Wireless+Mouse",
description: "The latest Wireless Mouse with ergonomic design and long battery life"
}

];

//Step 2: Creating out shopping cart
// This will hold the products added to the cart

let cart = [];

//Step 3: Get references to HTML elements
// This connects the JavaScript to the specific parts of the HTML document

const cartCountElement = document.getElementById("cart-count");
const productsGrid = document.getElementById("products-grid");
const featuredProducts = document.getElementById("featured-products");

//Step 4: Utility function to format prices
// This function formats the price to a currency format ("R999" instead of "999")
function formatPrice(price) {
    return "R" + price.toFixed(2);
}

console.log('JavaScript Loaded successfully!');
console.log('We have', products.length, 'products.');