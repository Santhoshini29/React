
import React from "react";
import ReactDOM from "react-dom/client";
   const Header = () =>{
    return(
      
      <div className="header">
           <div className="logo-container">
            <img className="logo" src =
            "https://marketplace.canva.com/EAE6qtOUX08/1/0/1600w/canva-good-kitchen-logo-design-with-chef-hat-symbol-8C8EhVwzkV8.jpg"></img>
           </div>
           <div className="nav-items">
               <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
                </ul> 
           </div>
      </div>
    )
   };
    
    
   const RestaurentCard =() =>{
    return(
       <div className="res-card" style={{
        backgroundColor:"#f0f0f0",
      } } >
        <img
        className="res-logo"
         alt="res-logo"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/be2bfa3b5dde1e71b41144e9b62878a9"></img>
         <h3> Hyderabadi Biryani  </h3>
         <h4>Biryani</h4>
         <h4>4.4 stars</h4>
         <h4>38 minutes </h4>
          

       </div>
    )
   };

   const Body =()=>{
    return(
      <div className="body">
         <div className="search">Search</div>
         <div className="res-container">
         <RestaurentCard/> 
         <RestaurentCard/>
         <RestaurentCard/> 
         <RestaurentCard/>
         <RestaurentCard/> 
         <RestaurentCard/>
       </div>
      </div> 
    )
   };
  const AppLayout = ()=> {
    return(
      <div className="app">
         <Header/>
         <Body/>
      </div>
    )
  };

 const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<AppLayout/>); 


  