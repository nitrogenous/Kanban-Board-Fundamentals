import React, { useState, useEffect, useCallback, createContext } from 'react';

const CategoryContext = createContext();
const {Provider, Consumer: CategoryConsumer} = CategoryContext;

const stateOfInitialCategories = {
	'C1': [], 
	'C2': [], 
	'C3': [], 
	'C4': [],
	'C5': []
};
const localStorageKeyOfCategories = 'localStateOfCategories';

const CategoryProvider = ({ children }) => {
	const [ stateOfCategories, setStateOfCategories ] = useState({});
	const [ historyOfActions, setHistoryOfActions ] = useState({index:0, actions: []});
	
	useEffect(() => {
		const localCategories = JSON.parse(localStorage.getItem(localStorageKeyOfCategories)) || stateOfInitialCategories;

		setStateOfCategories(localCategories);
	}, [])

	const getCategoryName = useCallback((categoryIndex) => {
		return Object.keys(stateOfCategories)[categoryIndex];
	}, [ stateOfCategories ]);
	
	const saveAction = useCallback((actionName, params) => {
		let actions = historyOfActions.index - 1 !== historyOfActions.actions.length ? historyOfActions.actions.slice(0, historyOfActions.index) : historyOfActions.actions;
			
		setHistoryOfActions({
			index: historyOfActions.index + 1, 
			actions: [...actions, {
			name: actionName,
			params: params
		}]});
	}, [ historyOfActions ]);

	const moveReward = useCallback((reward, addTo, removeFrom, saveToHistory = true) => {
		let nameOfaddTo = getCategoryName(addTo);
		let nameOfRemoveFrom = getCategoryName(removeFrom);
		let rewardsOfCategory = stateOfCategories[nameOfaddTo];
		let newRewardsOfCategory = rewardsOfCategory.findIndex((item) => item.id === reward.id) < 0 ? [...rewardsOfCategory, reward] : rewardsOfCategory;
		let sortedRewards = newRewardsOfCategory.sort((a, b) => a.id - b.id)
		let deletedRewardFromCategory = stateOfCategories[nameOfRemoveFrom] || [];

		if(removeFrom > -1) {
			deletedRewardFromCategory = deletedRewardFromCategory.filter((item) => reward.id !== item.id);
		}

		saveToHistory && saveAction('moveReward', [reward, addTo, removeFrom])

		setStateOfCategories({
			...stateOfCategories,
			[nameOfaddTo]: sortedRewards,
			...(removeFrom > -1 && {[nameOfRemoveFrom]: deletedRewardFromCategory})
		});
	}, [ stateOfCategories, getCategoryName, saveAction ]);

	const removeReward = useCallback((reward, removeFrom, saveToHistory = true) => {
		let nameOfaddTo = getCategoryName(removeFrom);
		let rewardsOfCategory = stateOfCategories[nameOfaddTo];
		let newRewardsOfCategory = rewardsOfCategory.filter((item) => reward.id !== item.id);

		saveToHistory && saveAction('removeReward', [reward, removeFrom]);

		setStateOfCategories({
			...stateOfCategories,
			[nameOfaddTo]: newRewardsOfCategory
		});
	}, [ stateOfCategories, getCategoryName, saveAction ]);

	const undo = () => {
		if(historyOfActions.index < 1) return;	
		
		let action = historyOfActions.actions[historyOfActions.index - 1];

		if (action.name === 'moveReward') {
			let [reward, addTo, removeFrom] = action.params;

			removeFrom === -1 ? removeReward(reward, addTo, false) : moveReward(reward, removeFrom, addTo, false);
		}
		else if (action.name === 'removeReward') {
			let [reward, addTo] = action.params;

			moveReward(reward, addTo, -1, false);
		}
		
		setHistoryOfActions({index: historyOfActions.index - 1, actions: historyOfActions.actions});
	};

	const redo = () => {
		if(historyOfActions.index === historyOfActions.actions.length) return;	

		let action = historyOfActions.actions[historyOfActions.index];

		if (action.name === 'moveReward') {
			let [reward, addTo, removeFrom] = action.params;
	
			removeFrom === -1 ? moveReward(reward, addTo, -1, false) : moveReward(reward, addTo, removeFrom, false);
		}
		else if (action.name === 'removeReward') {
			let [ reward, removeFrom ] = action.params;

			removeReward(reward, removeFrom, false);
		}

		setHistoryOfActions({index: historyOfActions.index + 1, actions: historyOfActions.actions});
	};

	const saveLocalState = useCallback(() => {
		localStorage.setItem(localStorageKeyOfCategories, JSON.stringify(stateOfCategories));

	}, [ stateOfCategories ])

	return <Provider value={{ stateOfCategories, moveReward, removeReward, saveLocalState, undo, redo }} > {children} </Provider>

};

export { CategoryProvider, CategoryConsumer, CategoryContext };