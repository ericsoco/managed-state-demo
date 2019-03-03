import component from './component.js';

const appState = {count: 10};

const controlledComponent = component({
	initialState: appState
});

document.querySelector('#single-instance').appendChild(controlledComponent);
