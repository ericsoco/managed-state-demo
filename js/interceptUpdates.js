import component, {setCount} from './component.js';

const appState = {count: 10};

const applyComponentUpdate = updater => {
	const nextState = updater(appState);
	return setCount(nextState.count * 2)(appState);
}

const controlledComponent = component({
	appState,
	applyUpdate: applyComponentUpdate
});

document.querySelector('#intercept-updates').appendChild(controlledComponent);
