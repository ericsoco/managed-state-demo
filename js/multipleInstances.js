import component, {setCount, resetCount} from './component.js';

const TITLE = 'What Is The Meaning?';
const appState = {
	title: TITLE,
	componentStates: [
		{count: 10},
		{count: 30}
	]
};

const getComponentUpdater = i => updater => {
	const {componentStates} = appState;

	// Update managed state
	componentStates[i] = updater(componentStates[i]);

	// Update derived state
	const sum = componentStates.reduce((sum, {count}) => sum + count, 0);
	appState.title = `${TITLE} -- ${sum}`;

	// Return updated state
	return componentStates[i];
};

const components = Array(2).fill().map((_, i) => component({
	initialState: appState.componentStates[i],
	applyUpdate: getComponentUpdater(i)
}));

const div = document.createElement('div');
div.textContent = JSON.stringify(appState, null, 2);
document.querySelector('#multiple-instances').appendChild(div);
