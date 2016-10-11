import React , { PropTypes } from 'react';
import moment from 'moment-timezone';
const TimeZones = moment.tz.names();

const App = ({ cities, onClickDel, onClickCreate }) => (
	<div>
		<p> Time Zone </p>
		
		{cities.map(({city,time},ix)=> 
			<p key={ix} onClick={() => onClickDel({ix})}>								
				{city } === {time}
			</p>
			)}  

		<select id='DropDown' onChange={() => onClickCreate(document.getElementById('DropDown').value)}>	
			{TimeZones.map((ix) =>
				<option key={ix} >{ix} </option>
			)}
		</select><br/><br/><br/>
		<p> made by Katka </p>
	</div>
);

App.PropTypes = { 
	cities: PropTypes.array.isRequired,
	onClickDel: PropTypes.func.isRequired,
	onClickCreate: PropTypes.funcisReq
};

export default App;
