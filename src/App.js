import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

//Styles
import './styles/style1.css';
import './styles/style2.css';
import './App.css';

//Components
import Home from './components/home';
import CustomerHome from './components/customer_homepage';
import CustomerDash from './components/customer_dashboard';
import RestaurantDash from './components/restaurant_dashboard';
import RestaurantPage from './components/restaurant_page';
import CheckOut from './components/checkout';
// import Header from './components/header';
import Footer from "./components/footer";
import Login from "./components/login";
import Signup from "./components/Signup";
import LoginRestaurant from "./components/login_restaurant";
import SignupRestaurant from "./components/Signup_Restaurant";

function App() {
 
  return (
    <Router >
      {/* <Header></Header> */}
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='customer_homepage' element={<CustomerHome/>}></Route>
          <Route path='customer_dashboard' element={<CustomerDash/>}></Route>
          <Route path='restaurant_dashboard' element={<RestaurantDash/>}></Route>
          <Route path='restaurant_page' element={<RestaurantPage/>}></Route>
          <Route path='checkout' element={<CheckOut/>}></Route>    
          <Route path='login' element={<Login/>}></Route>
          <Route path='Signup' element={<Signup/>}></Route>
          <Route path='loginrestaurant' element={<LoginRestaurant/>}></Route>
          <Route path="SignupRestaurant" element={<SignupRestaurant/>}></Route>
          <Route path="restaurants/:restaurantname" element={<RestaurantPage />} />    
          <Route path='checkout' element={<CheckOut/>}></Route>         
        </Routes>
      </div>
      <Footer></Footer>
    </Router>
  );
}

export default App;
