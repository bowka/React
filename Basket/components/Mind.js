import React , { PropTypes } from 'react';
// onChange

const Mind =({onIncrement,onDecrement, onChange, value}) =>(
	<div>
		<textarea onChange={onChange} value={value}/>
		<button onClick={()=>onIncrement(value)}>+</button>
		<button onClick={()=>onDecrement(value)}>-</button>
	</div>
	)
Mind.propTypes={
	value:PropTypes.string.isRequired,
	onChange:PropTypes.func.isRequired,
	onIncrement:PropTypes.func.isRequired,
	onDecrement:PropTypes.func.isRequired
}

export default Mind;
