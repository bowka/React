import { connect } from 'react-redux';
import App from '../components/TimeZone';
import * as ActionTypes from '../constants/actionTypes';
import * as TimeZoneSelector from '../selectors/TimeZoneSelector'

const mapStateToProps = (appstate) => {
	return {cities : TimeZoneSelector.getDisplayeCities(appstate)}}

const mapDispatchToProps = dispatch => ({
  onClickDel: () => dispatch({ type: ActionTypes.DEL }),
  onClickCreate: () => dispatch({ type: ActionTypes.ADD })
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
