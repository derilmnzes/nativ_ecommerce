import { configureStore } from '@reduxjs/toolkit'
import { productSlice } from './features/products/productSlice'
import { loadingSlice } from './features/loader/loader'
import { userSlice } from './features/userSlicer'


export const store = configureStore({
  reducer: {
    product: productSlice.reducer,
    loading:loadingSlice.reducer,
    user:userSlice.reducer
  },
})