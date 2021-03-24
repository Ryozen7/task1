import React from 'react';
import { Link } from 'react-router-dom';
// import {products} from './data';

function ProductList ({products, submitDelete })  {

	return (
		<div >
      <Link to='/create/:id' className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 ma2 dib ml5 mb4"
           > Create a Product</Link>

      <div className = 'row center' >
        {
          products.map( (product, i) => (
            <div key={products[i]._id} className="card bg-light-blue dib br3 pa3 ma2 bw2 shadow-5 mb4" > 
              <div className="space tc"> {'Click to Veiw Details/Edit'}</div> 
              <Link id="link" to= {'/product/'+ products[i]._id}>
                <img className="image" src={products[i].image} alt={products[i].name}/>
                <div className="card-info">
                  <div className="space">Name: {products[i].name}</div>
                  <div className="space">Category: {products[i].category}</div>
                  <div className="space">Price: ${products[i].price}</div>  

                </div>
              </Link>
               <button 
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f3 ma2 dib"
              onClick = { submitDelete } >
              Delete Product
           </button>
            </div>
          ))
        }
      </div>        
    </div> 
		)
}

export default ProductList;