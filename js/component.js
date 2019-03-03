import {increment, setCount, resetCount} from './updaters';
export * from './updaters';

const INITIAL_STATE = {count: 0};

export default function component({
  initialState = INITIAL_STATE,
  applyUpdate = null
} = {}) {
	// Consider this component instance "managed" if `applyUpdate` was passed
	const isManaged = Boolean(applyUpdate);

	// Update state, either locally if not managed, or let parent apply update
	const state = isManaged
		// Let parent apply update if managed
		? applyUpdate(state => update(state))
		// Apply update locally if not
		: update(initialState);

  return render(state);
}

function render(state) {
	const div = document.createElement('div');
	div.textContent = JSON.stringify(state, null, 2);
	return div;
}

function update(state) {
	return increment()(state);
}