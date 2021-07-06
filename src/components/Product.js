import React,{useContext} from 'react'
import ecommerceContext from '../context/EcommerceContext';
import { Link } from 'react-router-dom';
const Product = ({id,title,qty,unitPrice}) => 
{

    const {products,setProducts} = useContext(ecommerceContext);

    const onDeleteHandler = ()=>{

        const answer = window.confirm("You are about to delete a product? Click okay to continue")

        if(answer)
        {
            fetch(`http://localhost:5000/products/${id}`,{
                method:"DELETE"
            })
            .then((res)=>{
      
              return res.json()
            })
            .then(json=>{    
                
                    //update state
    
                    //copy the state array  into a new array
    
                    const newArray = [...products];
    
                    // find the index of the element that we want to delete
    
                    const foundIndex = newArray.findIndex(product=>product.id === id);
    
                    //delete the element based on the index
    
                     newArray.splice(foundIndex,1);
    
                     setProducts(newArray);
    
            
            })
            .catch((err)=>{
                console.log(`Error ${err}`);
            })
        }
  
    }

    return (
      
        <div className="grid grid-col-4">
            <span>
                <Link to={`products/details/${id}`}>
                    {title}
                </Link>
            </span>
            <div>
                <span className="qty">{qty}</span>
    
            </div>
            <span>${unitPrice.toFixed(2)}</span>
            <span className="operation-btn-holder">
                <button type="button" className="btn dButton"  onClick={onDeleteHandler}>Delete</button>
                <button type="button" className="btn dButton">Edit</button>
            </span>

      </div>

    )
}

export default Product
