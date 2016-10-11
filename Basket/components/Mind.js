import React , { propTypes } from 'react';


const Mind =({onIncrement,onDecrement}) =>(
	<div>
		<textarea id='new_item'></textarea>
		<button onClick={onIncrement(document.getElementById( 'new_item').value)}>+</button>
		<button onClick={onDecrement(document.getElementById( 'new_item').value)}>-</button>
	</div>
	)
Mind.PropTypes={
	inIncrement:propTypes.func.isRequired,
	onDecrement:propTypes.func.isRequired

}

export default Mind;
