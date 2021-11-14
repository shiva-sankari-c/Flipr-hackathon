function CheckOut() {
  function opendropdown(){
    document.getElementsByClassName("dropdown")[0].classList.toggle("open");
  }
    return (
      <div className="CheckOut">
        <h1>Checkout</h1>
        <i className="fas fa-user user" onClick={opendropdown}></i>
           <div className="dropdown">
             <span>s@gmail.com</span>
             <span>Logout  <i class="fas fa-power-off"></i></span>
           </div>
        <form action="">
          <input type="text" placeholder="Enter your name" /><br/>
          <input type="text" placeholder="Enter your address" /><br/>
          <input type="text" placeholder="City" /><br/>
          <input type="text" placeholder="Pincode" /><br/>

        <div className="menu_container">
        <div className="menu">
          <h1>Menu</h1>
           <div className="menu_items">
          
            <div className="menu_item">
              <div className="item_details">
                <h1>Item 1</h1>
                <div className="price">
                <span>3</span>
                <span>Rs.  99</span>
                </div>
              </div>
            </div>

            <div className="menu_item">
              <div className="item_details">
                <h1>Item 1</h1>
                <div className="price">
                <span>3</span>
                <span>Rs.  200</span>
                </div>
              </div>
            </div>

            <div className="menu_item">
              <div className="item_details">
                <h1>Item 1</h1>
                <div className="price">
                <span>3</span>
                <span>Rs.  450</span>
                </div>
              </div>
            </div>

           
         <div className="total_container">
         <div className="total">
             <span>Total</span>
             <span>Rs.  749</span>
           </div>
         </div>
           </div>
          </div>


        </div>

          <input type="submit" value="Place order" />
        </form>

      </div>
    );
  }
  
  export default CheckOut;