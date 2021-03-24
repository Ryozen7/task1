import React, {useState} from 'react';
import { products } from '../Home/data';
import { Link } from 'react-router-dom';


function Product (props, i) {

	const product = products.find(x => x._id === props.match.params.id);
	console.log(product._id)
	const [prodname, setProdName ] = useState(product.name)
	const [prodcategory, setProdCategory] = useState(product.category)
	const [prodprice, setProdPrice ] = useState(product.price)
	const [proddescription, setProdDescription ] = useState(product.description)

	const onNameChange = (event) =>{
		setProdName( event.target.value);
	}

	const onCategoryChange = (event) => {
		setProdCategory( event.target.value);
	}
	
	const onPriceChange = (event) => {
		setProdPrice(event.target.value);
	}
	const onDescriptionChange = (event) => {
		setProdDescription(event.target.value);
	}

	const onSave = () => {

		products.map( (prod, i) => {
			if (prod._id === product._id){
				prod._id= product._id;
  				prod.name= prodname;
  				prod.category= prodcategory;
  				prod.image= product.image;
  				prod.price= prodprice;
  				prod.description= proddescription;
			} return prod;
		} 
		)
	}
	return (
			<div>
				<div className= "row center mt6 ">
					<div> <img className="image dib br3 pa3 ma2 grow bw2 shadow-5 mb4" src={product.image} alt={product.name} />
					</div>
					<div className= "details ml5 f2">
						<div className= "mb3">Name: <input  onChange={onNameChange} className='inputfield'  type='text' value={prodname}/></div>
						<div className= "mb3">Product Category: <input onChange={onCategoryChange} className='inputfield' type='text' value={prodcategory}/></div>
						<div className= "mb3">Price: $ <input onChange={onPriceChange} className='inputfield' type='text' value={prodprice}/></div>
						<div className= "mb3">Description: </div>
						<input  onChange={onDescriptionChange} className='inputfield desc' type='text' value={proddescription}/>
						<Link to='/'> <button onClick= {onSave} className= "row f2 mt2 "> Save </button></Link>
					</div>
				</div>
				
				<Link  className= "row center mt6 f2" to='/'>Back to the Products </Link>  
			</div>)
}

export default Product;