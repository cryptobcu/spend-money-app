import { createSlice } from "@reduxjs/toolkit";
import productsJSON from "../../products.json";

const data = productsJSON.products;

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: data,
    budget: 100000000000,
    initialMoney: 100000000000,
  },
  reducers: {
    updateCount: (state, action) => {
      const { count, id } = action.payload;

      const product = state.items.find((product) => product.id === id); // Burda işlem yapılan yani satılan veya alınan ürünü bulduk. id yerine action.payload.id'de diyebilirdik.
      product.count = count; // Bulduğumuz üründen kaç tane satıldığını productCard'dan yollanan count değeri ile tanımladık.

      let price = 0; // Başlangıçta satılan ürün fiyatını 0 olarak tanımladık.

      state.items.map((product) => (
        // Bu bölümde yukarda kaç tane satıldığını belirttiğimiz ürünleri fiyatları ile çarpıp tek tek map'leyerek toplam satılan ürünün fiyatını bulduk.
        price += Number(product.count) * Number(product.productPrice)
      ));

      state.budget = Number(state.initialMoney) - Number(price); // İlk değerimizden harcanan miktarı çıkararak kalan bütçemizi bulduk.
    },
  },
});

export const { updateCount } = productsSlice.actions;
export default productsSlice.reducer;
