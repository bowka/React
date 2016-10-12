import React , { propTypes } from 'react';


const Basket =({items}) =>(
	<div>
		{items.forEach((i) => <p>{i} ---> {items[i]} times </p>)}
	</div>
)

Basket.propTypes={
	items: propTypes.object.isRequired
}

export default Basket;
