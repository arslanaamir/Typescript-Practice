interface smOne {
    productName : string,
    category : string,
    weight : string,
    soldBy? : string, //name of employee that sold that item
    purchasedBy? : string //Customer Name
}
interface smTwo extends smOne{
    color : string,
    size : string,
    brand : string, 
    description : string,
    price : number
}
interface clothing extends smTwo{
    stuff : string,
    collections : string,
    for : string, //male or female or kids
    washCautions : string
}
interface electronics extends smTwo{
    warranty : string,
    freeInstallation : boolean,
    dimensions : string,
    specifications : string,
    features : string
}
interface grocery extends smOne{
    expiryDate? : string,
    itemPricePer : string, //e.g kg , ml, per piece
    itemPrice : string,
    productDetails : string
}
//object 1
const itemOne : smOne = {
 productName : 'Fresh Potatos',
 category : 'Fruits & Vegetables',
 weight : '2kg',
 soldBy : 'M Ali',
 purchasedBy : 'Umer'
}
//object 2
const itemTwo : smTwo = {
    productName : 'Plastic Dustbin',
    category : 'Plastic Household Items',
    weight : '0.2kg',
    soldBy : 'M Ahmad',
    color : 'Blue',
    size : 'Medium',
    brand : 'MS Plastics Company',
    description : 'Plastic Dustbin for Sale',
    price : 599
}
//object 3
const itemThree : clothing = {
    productName : 'Mens Formal Shirt',
    category : 'Clothing',
    weight : '1 Pound',
    soldBy : 'M Ahmad',
    color : 'Blue',
    size : 'Large',
    brand : 'Edenrobe',
    description : 'Mens formal shirt for Sale',
    price : 1399,
    stuff : 'Cotton',
    collections : 'summer',
    for : 'Mens',
    washCautions : 'Wash with Simple Washing Powder instead of bleach or other Chemicals'
}
//object 4
const itemFour : electronics ={ 
    productName : 'Air Conditioner',
    category : 'Electronics',
    weight : '50kg',
    soldBy : 'M Salman',
    color : 'Grey',
    size : '1.5 Ton',
    brand : 'Gree',
    description : 'Gree Air Conditioner',
    price : 149999,
    warranty : '1 Year Warranty',
    freeInstallation : true,
    dimensions : '94.5 cm x 21 cm x 30 cm',
    specifications : 'High Quality Air Conditioner',
    features : 'Wifi : yes, Smart Air Conditioner'
}
//object 5
const itemFive : grocery ={
    productName : 'Kashmir Cooking Oil',
    category : 'Grocery',
    weight : '1kg',
    soldBy : 'Raza',
    expiryDate : 'December 25, 2025',
    itemPricePer : 'Liter', 
    itemPrice : '549Rs',
    productDetails : 'Cooking Oil'
}
console.log(itemFive)