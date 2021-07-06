import React,{useEffect,useState,useContext} from 'react'
import ecommerceContext from '../context/EcommerceContext';
import Header from "../components/Header";

const BestSellerPage = () => 
{

    const {products,setProducts} = useContext(ecommerceContext);

    useEffect(()=>{

        //Async operation GET
        fetch("http://localhost:5000/products?isBestSeller=true")
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setProducts(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])


    return (
        <div id="container">
            <Header/>
            <main>
                {products.map(product=>(<>
                    
                    <p>
                        Title : ${product.title}
                    </p>

                    <p>
                        Unit PRice ${product.unitPrice.toFixed(2)}
                    </p> <br/> <br/>
                 
                </>))}   
            </main>
 
        </div>
    )
}

export default BestSellerPage
