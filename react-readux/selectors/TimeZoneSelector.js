var moment = require('moment');

export const getTime = appState=> appState.time;
export const getDisplayeCities = appstate => 
	appstate.displayed_cities.map(city => ({city:city,time:moment.tz(getTime(appstate), city).format("HH:mm:ss")}));
