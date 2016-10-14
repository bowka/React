export const getContent = appState => appState.content;
export const getItems = appState => {
	var cont=getContent(appState);
	var res=[];
	for (var key in cont){
		res.push([key,cont[key]])
	}
	return res
};
export const getValue = appState =>  appState.value;
