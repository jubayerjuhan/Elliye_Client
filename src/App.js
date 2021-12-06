import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from "./PAGES/homapage/Homepage";
import Notfound from "./PAGES/notfound/Notfound";
import Productlist from './PAGES/product list/Productlist.jsx';
import Productdetail from './PAGES/product_info/Productdetail.jsx';
import Shoppingcart from "./PAGES/shoppingcart/Shoppingcart";
import Checkout from "./PAGES/checkout/Checkout"
import Checkoutcomplete from "./PAGES/checkoutcomplete/Checkoutcomplete";
import Signup from './PAGES/signup/Signup.jsx';
import Login from './PAGES/login/Login.jsx';
import Forgetpassword from './PAGES/forgetpassword/Forgotpassword.jsx';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadUser } from './actions/userActions.js';


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(loadUser());
    }
  }, [dispatch]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/allproducts" element={<Productlist />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/cart" element={<Shoppingcart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-complete" element={<Checkoutcomplete />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotten-password" element={<Forgetpassword />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
