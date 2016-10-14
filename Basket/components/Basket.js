import React , { PropTypes } from 'react';


const Basket =({items}) =>(
	<div>
		{items.map((i,ix) => 
			(<p key={ix}>{i[0]} ---> {i[1]} times </p>))}
		
	</div>
)

Basket.propTypes={
	items: PropTypes.array.isRequired,
}

export default Basket;
