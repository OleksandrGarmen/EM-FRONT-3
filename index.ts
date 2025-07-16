import products from './products.json';

type Product = {
    id:number,
    name:string,
    description:string,
    category:string,
    price:number,
    quantity:number,
    discount:number,
    reviewCount:number
}
//TASK #1
const ProductName = products.map(product => product.name);
console.log(ProductName);



//TASK #2
const ProductNameAndPrice = products.map(product => product.name && product.price);
console.log(ProductNameAndPrice);




//TASK #3
const quantity = products.filter(products => products.quantity >= 20);
console.log(quantity);




//TASK #4
const Price = products.filter(products => products.price >= 100);
console.log(Price);




//TASK #5
const Electronics = products.filter(products => products.category === "Electronics");
console.log(Electronics);




//TASK #6
const Product50 = products.filter(product => {
    const discountedPrice = product.price * (1 - product.discount / 100);
    return discountedPrice > 50;
});
console.log(Product50);




//TASK #7
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log(totalPrice);




//TASK #8
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
const avaragePrice = totalPrice/products.length;
console.log(avaragePrice.toFixed(2));



//TASK #9
const cheapest = products.reduce((min, product) => {
    return product.price < min.price ? product : min;
});



const mostExpensive = products.reduce((max, product) => {
    return product.price > max.price ? product : max;
});

console.log("Найдешевший товар:", cheapest);
console.log("Найдорожчий товар:", mostExpensive);



//TASK #10
const total = products.reduce((sum, product) => {
    const priceWithDiscount = product.price * (1 - product.discount / 100);
    return sum + priceWithDiscount * product.quantity;
}, 0);

console.log(total.toFixed(2));



//TASK #11
const zeroQuantityItems = products.filter(product => product.quantity === 0);
if (zeroQuantityItems.length === 0) {
    console.log("Товарів з нульовою кількістю немає." );
} else {
    console.log("Є товари з нульовою кількістю на складі.")
}



//TASK #12
const totalCount = products.reduce((sum, product) => sum + product.reviewCount, 0);
console.log(totalCount);



//TASK #13
const categories = products.map(product => product.category);
const uniqueCategories = [...new Set(categories)];
console.log(uniqueCategories);
