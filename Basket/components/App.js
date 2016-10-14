import React , { PropTypes } from 'react';
import Basket from './Basket';
import Mind from '../container/Mind';

const App = ({items}) =>(
	<div>
		<Basket  items={items}/>
		<Mind />
	</div>
)
App.propTypes={
	items: PropTypes.array.isRequired,
}

export default App;
