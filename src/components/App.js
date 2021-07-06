import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import {useState} from "react";

import HomePage from "../pages/HomePage";
import AddProductPage from "../pages/AddProductPage";
import EditProductPage  from "../pages/EditProductPage";
import ProductDescriptionPage from "../pages/ProductDescriptionPage";
import BestSellerPage from "../pages/BestSellerPage";

import ecommerceContext from "../context/EcommerceContext";

import "../assets/css/App.css"

const App = () => {
 const [products, setProducts] = useState([]);

  return (


    <Router>

        <Switch>
  
          <ecommerceContext.Provider value={{products,setProducts}} >   
        
            <Route exact path="/">
                  <HomePage />
            </Route>

              
            <Route exact path="/products">

                <AddProductPage/>

            </Route>

            <Route exact path="/products/bestsellers">

               <BestSellerPage/>

            </Route>

            <Route exact path="/products/details/:id">

              <ProductDescriptionPage/>

            </Route>

          
          </ecommerceContext.Provider>

        </Switch>
    </Router>


  )
}

export default App
