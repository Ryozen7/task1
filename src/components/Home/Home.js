import React, { useState} from 'react';
import { products } from './data';
import SearchBox from './SearchBox';
import ProductList from './ProductList';

function Home (props) {
	const [searchfield, setSearchfield] = useState('')
  // const [products, setProducts] = useState([])


    const onSubmitDelete = (item) => {
      item.target.parentElement.remove();
    }
  	const onSearchChange = (event) => {
  	  setSearchfield(event.target.value)
  	}
  	const filteredProducts = products.filter(product => {
    	return product.name.toLowerCase().includes(searchfield.toLowerCase());
  	})
	return (<div>
			<SearchBox searchChange = {onSearchChange}/>
  		<ProductList  products= {filteredProducts} submitDelete = {onSubmitDelete} />
		</div>)
}

export default Home;