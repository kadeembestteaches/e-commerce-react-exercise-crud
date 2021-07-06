import {useContext} from "react"
import Product from "./Product";
import ecommerceContext from "../context/EcommerceContext";

const ProductContainer = () => {

    //Here I am going to use the context that was provided in the ContextPRovider
    const {products} = useContext(ecommerceContext);
    
    return (

    <>
        <div id="heading-area" className="grid grid-col-4">

            <h2>Product</h2>
            <h2>Quantity</h2>
            <h2>Unit Price</h2>
            <h2>Operations</h2>
            
        </div>

        <div id="product-rows-area">

            {products.map((product)=>(<Product id={product.id} key={product.id} title={product.title} qty={product.qty} unitPrice={product.unitPrice} />))}
       
        </div>
 
    </>


    )
}

export default ProductContainer
