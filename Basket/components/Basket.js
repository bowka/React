import React , { propTypes } from 'react';


const Basket =({items}) =>(
	<div>
		{items.forEach((i) => <p>{i} ---> {items[i]} times </p>)}
	</div>
)

Basket.PropTypes={
	items: propTypes.Object.isRequired,
}

export default Basket;
