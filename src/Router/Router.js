import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from 'react-router-dom';
import Book from '../Components/BookDashboard/Book';
import BookDetails from '../Components/BookDetails/BookDetails';
import Cart from '../Components/Cart/Cart';
import CartOne from '../Components/CartOne/CartOne';
import Counter from '../Components/Counter/Counter';
import Customer from '../Components/CustomerDetails/Customer';
import Dashboard from '../Components/Dashboard/Dashboard';
import Header from '../Components/Header/Header';
import OrderPlaces from '../Components/OrderPlaces/OrderPlaces';
import OrderSummary from '../Components/OrderSummary/OrderSummary';
import ProfileDetails from '../Components/ProfileDetails/ProfileDetails';
import SignUp from '../Components/SignUp/SignUp';
import Success from '../Components/Success/Success';
import { WishList } from '../Components/Wishlist/Wishlist';
import Main from '../Main/Main';
import Login from '../Pages/Login/login';


function RouterComponent() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/header" element={<Header/>} />
                    <Route path="/book" element={<Book/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route path="/bookdetails" element={<BookDetails/>} />
                    <Route path="/customer" element={<Customer/>} />
                    <Route path="/dashboard" element={<Dashboard/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path="/cartone" element={<CartOne/>} />
                    <Route path="/main" element={<Main/>} />
                    <Route path="/ordersummary" element={<OrderSummary/>} />
                    <Route path="/orderplaces" element={<OrderPlaces/>} />
                    <Route path="/customer" element={<Customer/>} />
                    <Route path="/counter" element={<Counter/>} />
                    <Route path="/success" element={<Success/>} />
                    <Route path="/profiledetails" element={<ProfileDetails/>} />
                    <Route path="/wishlist" element={<WishList/>} />






        </Routes>
            </Router>
        </div>
    )
}

export default RouterComponent
