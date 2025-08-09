export const MAX_QTY = 10;

export function hasReachedMaxQty(cartItems, productId) {
  const item = cartItems.find((i) => i.id === productId);
  return item && item.qty >= MAX_QTY;
}

export const categoryVariants = {
  "men's clothing": ["Small", "Medium", "Large", "XL"],
  "women's clothing": ["XS", "Small", "Medium", "Large"],
  jewelery: ["Gold", "Silver", "Platinum"],
  electronics: ["Black", "Silver"]
};