import React , { propTypes } from 'react';
import Basket from './Basket';
import Mind from './Mind';

const App = ({items,inIncrement,onDecrement}) =>(
	<div>
		<Basket />
		<Mind />
	</div>
)

	

export default App;
