import React from 'react'
import { Routes, Route } from "react-router-dom";
import HomePage from '../Pages/HomePage';
import DetailsPage from '../Pages/DetailsPage';
import CartPage from '../Pages/CartPage';
import AdmiPage from '../Pages/AdmiPage';
import Layout from '../components/NavBar';
import AddProductPage from '../Pages/AddProductPage';
import ViewAndUpdate from '../Pages/ViewAndUpdate';
import OrderDetails from '../Pages/OrderDetails';

function Navigation() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/details/:id" element={<DetailsPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/admin" element={<AdmiPage />}>
            <Route path="add-product" element={<AddProductPage />} />
            <Route path="view-update" element={<ViewAndUpdate />} />
            <Route path="order-details" element={<OrderDetails />} />
        </Route>
    </Routes>
  )
}

export default Navigation