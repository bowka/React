import { connect } from 'react-redux';
import App from '../components/TimeZone';
import * as ActionTypes from '../constants/actionTypes';
import * as TimeZoneSelector from '../selectors/TimeZoneSelector'

const mapStateToProps = (appstate) => {
	return {cities : TimeZoneSelector.getDisplayeCities(appstate)}}

const mapDispatchToProps = dispatch => ({
  onClickDel: (ix) => dispatch({ type: ActionTypes.DEL, data: ix}),
  onClickCreate: (zone) => dispatch({ type: ActionTypes.ADD, data: zone})
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
