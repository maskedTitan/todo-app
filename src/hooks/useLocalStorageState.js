import { useState, useEffect } from 'react';

function useLocalStoragaState(key, defaultVal) {
	//make a piece of state based off value in localstorage or default
	const [ state, setState ] = useState(() => {
		let val;
		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}
		return val;
	});

	//useEffect to update localstorage when state changes
	useEffect(
		() => {
			window.localStorage.setItem(key, JSON.stringify(state));
		},
		[ state ]
	);

	return [ state, setState ];
}

export default useLocalStoragaState;
