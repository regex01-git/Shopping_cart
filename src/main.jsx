
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import productReducer, { productFetch } from './features/Products'
import cartReducer from './features/Cart.js'
const store=configureStore({
  reducer:{
    products:productReducer,
    cart:cartReducer
  }
})
store.dispatch(productFetch())
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
  </BrowserRouter>
)
