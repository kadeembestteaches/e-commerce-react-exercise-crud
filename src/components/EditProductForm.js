
const EditProductForm = () => 
{


    return (
        <section id="register-section">
        
        <h1>Edit Product</h1>

        <form>

            <div className="form-control">
                <label htmlFor="title">Item Title</label>
                <input type="text" id="title" />
            </div>

            <div className="form-control">
                <label htmlFor="price">Unit Price</label>
                <input type="text" id="price"  />
            </div>

            <div className="form-control">
                <label htmlFor="costPrice">Cost Price</label>
                <input type="text" id="costPrice"  />
            </div>

            <div className="form-control">
                <label htmlFor="qty">Qty</label>
                <input type="text" id="qty"  />
            </div>

            <div className="form-control">
                <label htmlFor="details">Details</label>
                <textarea id="details"></textarea>
            </div>

            <div className="form-control">
                <label htmlFor="details">Select Best Seller</label>
                 Yes <input type="radio" name="bestseller" />
                 No <input type="radio" name="bestseller"  />
            </div>

            <div className="form-control">
                <label htmlFor="img">Image</label>
                <input type="text" id="img"   />
            </div>

            <div className="form-control">
                <button className="btn" type="submit">Edit Product</button>
            </div>

        </form>

     </section>
    )
}

export default EditProductForm