const isInShoppingCart = (cartItems, cartItem) => {
  return cartItems.some(item => ((item.id === cartItem.id) && (item.name === cartItem.name)));
}

export default isInShoppingCart;