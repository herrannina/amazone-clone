import React from 'react'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Landing from './Pages/Landing/Landing'
import Auth from './Pages/Auth/Auth'
import Payment from './Pages/Payment/Payment'
import Order from './Pages/Order/Orders'
import Cart from './Pages/Cart/Cart'
import Results from './Pages/Results/Result'
import ProductDetail from './Pages/ProductDetails/Productdetail'
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_test_51OktWtHDkTlRCwWVPYydCjunYZeeq3KlWKYsfxkpK8WDH8kAQjBgIGq3MpliPsVy6SYXrYvY1d71E4md0gpj8YiZ0031DFgQkd');

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payment"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payment"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Order />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}
 
export default Routing