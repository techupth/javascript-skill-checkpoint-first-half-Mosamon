// Question #1: Inventory Management
// reassign value in object
// find the total value
// show message Total inventory value: <total value> baht
const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity= 200
inventory.banana = {price: 20, quantity: 300}
inventory.totalPrice = (inventory.apple.price*inventory.apple.quantity)+(inventory.banana.price*inventory.banana.quantity)
console.log(`Total inventory value: ${inventory.totalPrice} baht`)
