const PRODUCTS = [
    { id: 1, name: "Apple", price: 2.5 },
    { id: 2, name: "Banana", price: 1.5 },
    { id: 3, name: "Orange", price: 3 },
    { id: 4, name: "Rice", price: 1.5 },
    { id: 5, name: "Chocolate", price: 3 },
  ];
  
  const SHOPPING_CART = [
    { id: 1, quantity: 2 },
    { id: 3, quantity: 1 },
  ];
  
  function getCartTotalAmount() {
    let totalAmount = 0;
    for (let item of SHOPPING_CART) {
      const product = PRODUCTS.find(prod => prod.id === item.id);
      if (product) {
        totalAmount += product.price * item.quantity;
      }
    }
    return totalAmount;
  }
  
  function addProductToCart(productId) {
    let productInCart = SHOPPING_CART.find(item => item.id === productId);
    if (productInCart) {
      productInCart.quantity++;
    } else {
      SHOPPING_CART.push({ id: productId, quantity: 1 });
    }
  }
  
  function removeProductFromCart(productId) {
    let indexToRemove = SHOPPING_CART.findIndex(item => item.id === productId);
    if (indexToRemove !== -1) {
      if (SHOPPING_CART[indexToRemove].quantity > 1) {
        SHOPPING_CART[indexToRemove].quantity--;
      } else {
        SHOPPING_CART.splice(indexToRemove, 1);
      }
    }
  }
  
  // --------------------------------------------------------
  // TESTS ZONE
  // --------------------------------------------------------
  
  // test 1
  console.log(getCartTotalAmount()); // Should be 8
  
  // test 2
  addProductToCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1}]
  
  // test 3
  addProductToCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":3},{"id":3,"quantity":1},{"id":2,"quantity":1}]
  
  // test 4
  removeProductFromCart(1);
  console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1},{"id":2,"quantity":1}]
  
  // test 5
  removeProductFromCart(2);
  console.log(JSON.stringify(SHOPPING_CART)); // Should be [{"id":1,"quantity":2},{"id":3,"quantity":1}]
  