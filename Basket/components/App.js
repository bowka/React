import React , { propTypes } from 'react';
import Basket from './Basket';
import Mind from './Mind';

const App = ({items,inIncrement,onDecrement}) =>(
	<div>Ahoj
		<Basket items={items}/>
		<Mind inIncrement={inIncrement} onDecrement={onDecrement}/>
	</div>
)
App.propTypes={
	items: propTypes.object.isRequired,
	inIncrement:propTypes.func.isRequired,
	onDecrement:propTypes.func.isRequired
}

	

export default App;
