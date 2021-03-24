import React from 'react';

const SearchBox = ({products, searchChange}) => {
	return (
			<div className ='row center'>
				<input 	
					className ='search'
					type = 'search' 
					placeholder='Search Product Name'
					onChange = {searchChange} 
				/>
			</div>
		);		
}

export default SearchBox;