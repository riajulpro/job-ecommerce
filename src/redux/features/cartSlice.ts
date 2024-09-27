import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Omit<CartItem, "quantity">>) {
      const product = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
        state.totalPrice += product.price;
      } else {
        state.items.push({ ...product, quantity: 1 });
        state.totalQuantity += 1;
        state.totalPrice += product.price;
      }
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const productId = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        state.totalQuantity -= existingProduct.quantity;
        state.totalPrice -= existingProduct.price * existingProduct.quantity;
        state.items = state.items.filter((item) => item.id !== productId);
      }
    },
    updateQuantity(
      state,
      action: PayloadAction<{ productId: number; quantity: number }>
    ) {
      const { productId, quantity } = action.payload;
      const existingProduct = state.items.find((item) => item.id === productId);
      if (existingProduct) {
        const priceDifference =
          existingProduct.price * (quantity - existingProduct.quantity);
        state.totalPrice += priceDifference;
        state.totalQuantity += quantity - existingProduct.quantity;
        existingProduct.quantity = quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
