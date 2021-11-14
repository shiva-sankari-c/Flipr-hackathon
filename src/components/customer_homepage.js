import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getRestaurants } from "../data/restaurant";
function CustomerHome() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  let restaurants = getRestaurants();
  function opendropdown(){
    document.getElementsByClassName("dropdown")[0].classList.toggle("open");
  }
    return (
      <div className="CustomerHome">
         <div className="header">
           <img src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80" alt="customer_homepage" className="header_image"/>
           <form className="location_input">
             <input type="text" placeholder="Enter your location"></input>
           </form>
           <i className="fas fa-user user" onClick={opendropdown}></i>
           <div className="dropdown">
             <span>s@gmail.com</span>
             <span>Logout  <i class="fas fa-power-off"></i></span>
           </div>
         </div>
         <h1>Restaurants nearby</h1>
         <div className="restaurants">
         {restaurants.map(restaurant => (
            <Link 
            to={`/restaurants/${restaurant.name}`}
            key={`${restaurant.id}`} 
            className="restaurant_card"            
            >
              <div className="overlay"></div>
              <img src={`${restaurant.imageurl}`} alt="restaurant_image" className="restaurant_thumbnail"/>
              <h1 className="restaurant_name">{restaurant.name}</h1>
            </Link>
          ))}      
        </div>     
      </div>
    );
  }
  
  export default CustomerHome;