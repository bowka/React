import { connect } from 'react-redux';
import * as ActionTypes from '../constants/actionTypes';
import * as selector from '../selectors/selector'
import Mind from '../components/Mind'

const mapStateToProps = appState => ({
	value: selector.getValue(appState)
})

const mapDispatchToProps = dispatch =>({
	onIncrement: (item)=> dispatch({type : ActionTypes.INC}),
	onDecrement: (item)=> dispatch({type : ActionTypes.DEC}),
	onChange: (event) => dispatch({type: ActionTypes.SETVALUE, payload:event.target.value})
});

export default connect(mapStateToProps,mapDispatchToProps)(Mind); 

