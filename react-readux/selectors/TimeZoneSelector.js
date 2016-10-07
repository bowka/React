var moment = require('moment');
export const getTime = appState=> appState.time;
export const getDisplayeCities = appstate => appstate.displayed_cities.map(city => moment.tz(getTime(appstate, city)));
//export const getCityTime = appState  => moment.tz(getTime(appstate),city);
