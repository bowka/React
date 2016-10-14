import { connect } from 'react-redux';
import * as selector from '../selectors/selector'
import App from '../components/App'


const mapStateToProps = appState => ({
	items: selector.getItems(appState)
});
export default connect(mapStateToProps)(App); 
