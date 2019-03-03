export function increment() {
	return state => ({...state, count: state.count + 1});
}

export function setCount(count) {
	return state => ({...state, count});
}

export function resetCount() {
	return state => ({...state, count: 0});
}
