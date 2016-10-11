export const getItems = appState => (item) => item;
export const getAmountOfItem = (appState) => appState.map(item => ({item:item,amount:appState[item]}));
