import { Link } from "react-router-dom";


function Header() {
 
    return (     
      <div className="Header">
        <nav>
            <Link to="/" className="btn">Home</Link> 
            <Link to="/customer_homepage" className="btn">Customer Homepage</Link> 
            <Link to="/customer_dashboard" className="btn">Customer Dashboard</Link>
            <Link to="/restaurant_page" className="btn">Restaurant page</Link>
            <Link to="/restaurant_dashboard" className="btn">Restaurant dashboard</Link>
            <Link to="/checkout" className="btn">Checkout</Link> 
        </nav>
      </div>
    );
  }
  
  export default Header;