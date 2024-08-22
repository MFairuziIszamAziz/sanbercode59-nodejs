const storeName = "Online Shop";
const storeLocation = "Padang";
const salesTaxRate = 0.1;

let cartTotal = 0;
let itemCount = 0;
let customerName;

var discountApplied = false;

let products = [
  { id: 1, name: "Laptop", price: 5000, stock: 10 },
  { id: 2, name: "Smartphone", price: 3000, stock: 5 },
  { id: 3, name: "Headphones", price: 500, stock: 15 },
];

function addToCart(productId, quantity) {
  let product = products.find((p) => p.id === productId);
  if (product && product.stock >= quantity) {
    cartTotal += product.price * quantity;
    itemCount += quantity;
    product.stock -= quantity;
    console.log(`${quantity} ${product.name} telah ditambahkan ke keranjang.`);
  } else {
    console.log(`Maaf, stok ${product ? product.name : "produk"} tidak cukup.`);
  }
}

function applyDiscount() {
  if (cartTotal > 50000 && !discountApplied) {
    cartTotal *= 0.9;
    discountApplied = true;
    console.log("Diskon 10% telah diterapkan.");
  } else if (discountApplied) {
    console.log("Diskon sudah diterapkan.");
  } else {
    console.log("Total keranjang tidak memenuhi syarat untuk diskon.");
  }
}

function calculateTotal() {
  let totalWithTax = cartTotal + cartTotal * salesTaxRate;
  console.log(`Total akhir setelah pajak: Rp${totalWithTax}`);
}

customerName = "Faruzi";
console.log(`Selamat datang di ${storeName}, ${customerName}!`);
addToCart(1, 2);
addToCart(2, 1);
applyDiscount();
calculateTotal();

console.log(`Jumlah item di keranjang: ${itemCount}`);
console.log(`Total belanja: Rp${cartTotal}`);
console.log(`Apakah diskon diterapkan? ${discountApplied ? "Ya" : "Tidak"}`);
