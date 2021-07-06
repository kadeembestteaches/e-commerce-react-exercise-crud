import React,{useState, useContext}from 'react';
import ecommerceContext from '../context/EcommerceContext';
import {useHistory} from "react-router-dom"

const AddProductForm = () => 
{


    const history = useHistory();

    const {products,setProducts} = useContext(ecommerceContext);
    const [formData , setFormData] = useState({

        title:"",
        unitPrice : 0,
        costPrice :0,
        qty :0,
        details :"",
        isBestSeller : "",
        image : ""

    })


    const formSubmitHandler = (evt)=>{
        evt.preventDefault();

        
        fetch("http://localhost:5000/products",{
            method:"POST",
            headers :{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                ...formData,
                costPrice : parseFloat(formData.costPrice),
                unitPrice : parseFloat(formData.unitPrice),
                qty : parseInt(formData.qty)

            })
        })
        .then((res)=>{
  
          return res.json()
        })
        .then(newAddedProduct=>{  
            
            alert("You product was sucessfully added");

            setProducts([...products, newAddedProduct]);
            
             history.push("/")
        })
        .catch((err)=>{
            console.log(`Error ${err}`);
        })

    }


    return (
        <section id="register-section">
        
        <h1>Add Product</h1>

        <form onSubmit={formSubmitHandler}>

            <div className="form-control">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" value={formData.title} onChange={(evt)=>{
                

                    setFormData({
                        ...formData,
                        title: evt.target.value
                    });
                }}/>
            </div>

            <div className="form-control">
                <label htmlFor="price">Unit Price</label>
                <input type="text" id="price" value={formData.unitPrice} onChange={(evt)=>{
                
                setFormData({
                    ...formData,
                    unitPrice: evt.target.value
                });
            }} />
            </div>

            <div className="form-control">
                <label htmlFor="costPrice">Cost Price</label>
                <input type="text" id="costPrice" value={formData.costPrice} onChange={(evt)=>{
                

                setFormData({
                    ...formData,
                    costPrice: evt.target.value
                });
            }} />
            </div>

            <div className="form-control">
                <label htmlFor="qty">Qty</label>
                <input type="text" id="qty"  value={formData.qty} onChange={(evt)=>{
                

                setFormData({
                    ...formData,
                    qty: evt.target.value
                });
            }}/>
            </div>

            <div className="form-control">
                <label htmlFor="details">Details</label>
                <textarea id="details" value={formData.details} onChange={(evt)=>{
                

                setFormData({
                    ...formData,
                    details: evt.target.value
                });
            }}></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="details">Select Best Seller</label>

                 Yes <input type="radio" name="bestseller" value="true" onChange={(evt)=>{
                
                setFormData({
                    ...formData,
                    isBestSeller: true
                });
            }} />
                 No <input type="radio" name="bestseller" value="false"  onChange={(evt)=>{
                
                setFormData({
                    ...formData,
                    isBestSeller : false
                });
            }}/>
            </div>

            <div className="form-control">
                <label htmlFor="img">Image</label>
                <input type="text" id="img" value={formData.image} onChange={(evt)=>{
            

                setFormData({
                    ...formData,
                    image: evt.target.value
                });
            }} />
            </div>

            <div className="form-control">
                <button className="btn" type="submit">Add Product</button>
            </div>

        </form>

     </section>
    )
}

export default AddProductForm