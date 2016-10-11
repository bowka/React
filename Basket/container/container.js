import { connect } from 'react-redux';
import * as ActionTypes from '../constants/ActionTypes';
import * as selector from '../selectors/selectors'
import App from '../components/App'

const mapStateToProps = appState => ({
	items: selector.getItems(appstate)
})
const mapDispatchToProps = dispatch =>({
	onIncrement: (item) => dispatch({type: ActionTypes.INC data:item})
	onDecrement: (item) => dispatch({type: ActionTypes.DEC data:item})
});
export default connect (mapStateToProps,mapDispatchToProps)(App); 

