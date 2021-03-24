import React, { useState } from 'react';
import { products } from '../Home/data';
import {Link} from 'react-router-dom';

function Create() {
	const [productname, setProductName ] = useState('')
	const [productcategory, setProductCategory] = useState('')
	const [productimage, setProductImage ] = useState('')
	const [productprice, setProductPrice ] = useState('')
	const [productdescription, setProductDescription ] = useState('')
	const [imageurl, setImageURL] = useState('')
	// const [product, setProduct] = useState({})

	const onNameChange = (event) =>{
		setProductName( event.target.value);

	}

	const onCategoryChange = (event) => {
		setProductCategory( event.target.value);
	}
	const onImageChange = (event) => {
		setProductImage(event.target.value);
		
	}
	const onPriceChange = (event) => {
		setProductPrice(event.target.value);
	}
	const onDescriptionChange = (event) => {
		setProductDescription(event.target.value);
	}
	const onCreate = () => {
		var i= 4;
		 i = i+ 1;
    	products.push({
    				_id: i,
      				name: productname,
      				category: productcategory,
      				image: productimage,
      				price: productprice,
      				description: productdescription,
    	})
    	
	console.log(products)
	}

	const onSubmitImage= () => {
		setImageURL(productimage)
		}
		return (
			<div>
				<div className= "row center mt2 ">
					<div> <img className="image dib br3 pa3 ma2 grow bw2 shadow-5 mb4" src={imageurl} alt='Display here on Submit' />
					</div>
					<article className="br3 ml4 dark-gray shadow-4 b--black-10 mt6 mb3 w-300  w-40-l">
					<main className="pa4 black-80">
					  <div className= "details ml5 f2">
						<div className= "mb3">Name: <input  onChange={onNameChange} className='inputfield'  type='text'/></div>
						<div className= "mb3">Product Category: <input onChange={onCategoryChange} className='inputfield' type='text'/></div>
						<div className= "mb3">Image Link: <input onChange={onImageChange} className='inputfield'  type='text' /><button onClick={onSubmitImage} >Submit</button></div>
						<div className= "mb3">Price: $ <input onChange={onPriceChange} className='inputfield' type='text'/></div>
						<div className= "mb3">Description: </div>
						<input  onChange={onDescriptionChange} className='inputfield desc' type='text'/>
						<Link to= '/'> <button onClick={onCreate} className= "row f2 mt2 "> Create </button> </Link>
					</div>
					</main>
					</article>
				</div>
			</div>
		)
}
export default Create;