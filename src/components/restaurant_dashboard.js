
function RestaurantDash() {
    return (
      <div className="RestaurantDash">
         <div className="dash_header">
            <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="header_image" className="header_image"/>
            <div className="overlay"></div>
            <div className="restaurant_info">
               <h1>Restaurant name</h1>
               <p>Restaurant address</p>
               <p>8am - 10pm</p>
            </div>
         </div>

         <div className="sections">
           <div className="sidebar">
                 <a href="#"><span>Home</span><i className="fas fa-home"></i></a>
                 <a href="#"><span>Order List</span><i className="fas fa-truck"></i></a>
                 <a href="#"><span>Logout</span><i class="fas fa-sign-out-alt"></i>

</a>
           </div>
           <div className="main">
            <h1>Menu</h1>
           <div className="menu_items">
          
            <div className="menu_item">
              <div className="item_details">
                <h1>Item 1</h1>
                <p>Rs.460</p>
                <span className="rating">4.3<i className="fas fa-star"></i></span>
              </div>
              <button>Remove</button>
            </div>

            <div className="menu_item">
              <div className="item_details">
                <h1>Item 2</h1>
                <p>Rs.460</p>
                <span className="rating">4.3<i className="fas fa-star"></i></span>
              </div>
              <button>Remove</button>
            </div>

            <div className="menu_item">
              <div className="item_details">
                <h1>Item 3</h1>
                <p>Rs.460</p>
                <span className="rating">4.3<i className="fas fa-star"></i></span>
              </div>
              <button>Remove</button>
            </div>          
           </div>

           <p>Want to add another item? <span>Click here</span></p>

           <form action="">
             <input type="text" placeholder="Enter the food item"/><br/>
             <input type="text" placeholder="Enter the price"/><br/>

             <button>Add</button>
           </form>
           </div>
         </div>
       
      </div>
    );
  }
  
  export default RestaurantDash;