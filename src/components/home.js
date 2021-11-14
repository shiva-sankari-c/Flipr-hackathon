import {Link} from "react-router-dom";
function Home() {
    return (
      <div className="Home">
        <div className="bg_image">
        <h1>Welcome to Tomato!</h1>
         <p>Your All-Time-Favorite Food Delivery Palace</p> 
         <div className="home_button">
         <div class="d-grid gap-2 col-5 mx-auto buttons">
            <Link to="/login"><button class="btn  btn-outline-danger"type="Login">Login</button></Link>
            <Link to="/loginrestaurant"><button class="btn  btn-outline-danger"type="Login">Login As Restaurant</button></Link>
            <Link to="/signup"> <button class="btn  btn-outline-danger" type="Login">Signup</button></Link>
            <Link to="/signuprestaurant"><button class="btn  btn-outline-danger" type="Login">Signup As Restaurant</button></Link>
         </div>
        </div>
      </div>
      </div>
    );
  }
  
  export default Home;