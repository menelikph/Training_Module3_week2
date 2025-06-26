// Step 1: Product object
const products = {
  p1: { id: 1, name: "Laptop", price: 2500 },
  p2: { id: 2, name: "Mouse", price: 150 },
  p3: { id: 3, name: "Keyboard", price: 300 },
};

// Step 2: Convert to Set
const uniqueProducts = new Set(
  Object.values(products).map((product) => product.name)
);

// Step 3: Map for categories
const productCategories = new Map([
  ["Electronics", "Laptop"],
  ["Accessories", "Mouse"],
  ["Peripherals", "Keyboard"],
]);

//for ... in
for (id in products) {
  console.log(`producto ID: ${id}, Detalles: `, products[id]);
}

//for ... on
for (const product of uniqueProducts) {
  console.log("Producto único: ", product);
}

//forEach
productCategories.forEach((product, category) => {
  console.log(`Categoria: ${category}, Producto: ${product}`);
});

console.log("Pruebas completas de gestion de datos: ");
console.log("Listas de productos (objeto): ", products);
console.log("lista de productos unicos (set): ", uniqueProducts);
console.log("Pruebas completas de gestion de datos: ", productCategories);

// Step 4: DOM display and validation
function displayData() {
  let productText = "";
  for (let key in products) {
    const p = products[key];
    productText += `ID: ${p.id}, Name: ${p.name}, Price: $${p.price}\n`;
  }
  document.getElementById("productsOutput").textContent = productText;

  let setText = "";
  for (const name of uniqueProducts) {
    setText += `Product: ${name}\n`;
  }
  document.getElementById("setOutput").textContent = setText;

  let mapText = "";
  productCategories.forEach((product, category) => {
    mapText += `Category: ${category}, Product: ${product}\n`;
  });
  document.getElementById("mapOutput").textContent = mapText;

  const objectCount = Object.keys(products).length;
  const setCount = uniqueProducts.size;
  
  const validationMessage =
    objectCount === setCount
      ? "✅ No duplicate product names found."
      : "❌ Duplicate product names detected.";
  document.getElementById("validationOutput").textContent = validationMessage;
}
