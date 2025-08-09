import { useSelector, shallowEqual } from 'react-redux';

export const useCartQty = (productId) => {
  return useSelector(
    (state) => {
      const item = state.handleCart.find(i => i.id === productId);
      
      return item ? item.qty : 0;
    },
    shallowEqual
  );
};
