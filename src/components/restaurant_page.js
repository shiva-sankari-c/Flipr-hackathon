import { Link, useParams } from "react-router-dom";
import { useEffect,useState } from "react";
import {getRestaurant} from "../data/restaurant";

function RestaurantPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  let params = useParams();
  let restaurant = getRestaurant(params.restaurantname);
    return (
      <div className="RestaurantPage">
         <div className="Restaurant_header">
            <img src={`${restaurant.imageurl}`} alt="header_image" className="header_image"/>
            <div className="overlay"></div>
            <div className="restaurant_info">
               <h1>{restaurant.name}</h1>
               <p>{restaurant.address}</p>
               <p>{restaurant.timing}</p>
            </div>
         </div>

         <div className="Restaurant_menu">
           <h1>Menu</h1>

           <div className="menu_items">
           {restaurant.menu.map(menu =>(
            <div className="menu_item" key={menu.itemid}>
              <div className="item_details">
                <h1>{menu.item}</h1>
                <p>{menu.price}</p>
                <span className="rating">{menu.rating}<i className="fas fa-star"></i></span>
              </div>
              <button>
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </button>
            </div>
         ))}
           </div>

          <div className="subtotal">
           Subtotal : <span>570</span> <Link to="/checkout"><button>PROCEED</button></Link>
         </div>
         

         </div>


       
        
      </div>
    );
  }
  
  export default RestaurantPage;