
import {useState, useEffect} from "react"
import {useParams} from "react-router-dom";
import Header from "../components/Header";

const ProductDescriptionPage = () => 
{


    const [product, setProduct] = useState({
        title :"",
        unitPrice:0,
        description:"",
        costPrice :0,
        image:""
    })


    const {id} = useParams();


    useEffect(()=>{

        //Async operation GET
        fetch(`http://localhost:5000/products/${id}`)
        .then((res)=>{
  
          return res.json()
        })
        .then(json=>{    
              setProduct(json);
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })
  
  
    },[])



    return (
        <div id="container">
            <Header />
            <main>
                <h2>Product</h2>

                <p>
                    <img className="product-image" src={product.image} />
                </p>
                <p>
                    Title :  {product.title}
                </p>

                <p>
                   Unit Price : {product.unitPrice}
                </p>

                <p>
                   Cost Price : {product.costPrice}
                </p>

                <p>
                    Description :  {product.description}
                </p>

            </main>

    </div>
    )
}

export default ProductDescriptionPage
