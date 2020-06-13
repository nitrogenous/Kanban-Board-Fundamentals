import React, { useState, useEffect, useCallback, createContext } from 'react';
import { rewards } from '../Containers/Main/Table';

const CategoryContext = createContext();
const { Provider, Consumer: CategoryConsumer } = CategoryContext;

const initalCategoryState = {
	'C1': [rewards[0], rewards[1]], 
	'C2': [], 
	'C3': [], 
	'C4': [rewards[3]],
	'C5': []
};
const localStateStorageKey = 'categoryState';

const CategoryProvider = ({ children }) => {
	const [ categoryState, setcategoryState ] = useState({});
	const [ actionsHistory, setActionsHistory ] = useState({index:0, actions: []});
	
	useEffect(() => {
		const localStateValue = JSON.parse(localStorage.getItem(localStateStorageKey)) || initalCategoryState;

		setcategoryState(localStateValue);
	}, [])

	useEffect(() => {
		console.log(actionsHistory);
	});
	const undo = () => {
		if(actionsHistory.index < 1) return;	
		
		let action = actionsHistory.actions[actionsHistory.index - 1];

		switch(action.name) {
			case 'moveReward': 
				let [ reward, idToInsert, idToRemove ] = action.params;

				if ( idToRemove === -1 ) {
					removeReward(reward, idToInsert, false);
				} 
				else {
					moveReward(reward, idToRemove, idToInsert, false);				
				}
			break;
			case 'removeReward':
				let [ rewardToAdd, idToAdd ] = action.params;

				moveReward(rewardToAdd, idToAdd, -1, false);
			break;
		}

		setActionsHistory({index: actionsHistory.index - 1, actions: actionsHistory.actions});
	};

	const getCategoryName = useCallback((categoryIndex) => {
		return Object.keys(categoryState)[categoryIndex];
	}, [ categoryState ]);
	
	const moveReward = useCallback((reward, idOfInsertToCategory, idOfRemoveFromCategory, saveToHistory = true) => {
		let insertCategory = getCategoryName(idOfInsertToCategory);
		let removedFromName = getCategoryName(idOfRemoveFromCategory);
		let rewardsOfCategory = categoryState[insertCategory];
		let newRewardsOfCategory = rewardsOfCategory.findIndex((item) => item.id === reward.id) < 0 ? [...rewardsOfCategory, reward] : rewardsOfCategory;
		let sortedRewards = newRewardsOfCategory.sort((a, b) => a.id - b.id)
		let deletedRewardFromCategory = categoryState[removedFromName] || [];

		if(idOfRemoveFromCategory > -1) {
			deletedRewardFromCategory = deletedRewardFromCategory.filter((item) => reward.id !== item.id);
		}

		if(saveToHistory) {

			let actions = actionsHistory.index - 1 !== actionsHistory.actions.length ? actionsHistory.actions.slice(0, actionsHistory.index) : actionsHistory.actions;
			
			setActionsHistory({index: actionsHistory.index + 1, actions: [...actions, {
				name: 'moveReward',
				params: [reward, idOfInsertToCategory, idOfRemoveFromCategory]
			}]});
		}
			
		setcategoryState({
			...categoryState,
			[insertCategory]: sortedRewards,
			...(idOfRemoveFromCategory > -1 && {[removedFromName]: deletedRewardFromCategory})
		});
	}, [ categoryState, getCategoryName, actionsHistory ]);

	const removeReward = useCallback((reward, removeFrom, saveToHistory = true) => {
		let categoryName = getCategoryName(removeFrom);
		let rewardsOfCategory = categoryState[categoryName];

		let newRewardsOfCategory = rewardsOfCategory.filter((item) => reward.id !== item.id);

		if(saveToHistory) {

			let actions = actionsHistory.index - 1 !== actionsHistory.actions.length ? actionsHistory.actions.slice(0, actionsHistory.index) : actionsHistory.actions;
			
			setActionsHistory({index: actionsHistory.index + 1, actions: [...actions, {
				name: 'removeReward',
				params: [reward, removeFrom]
			}]});
		}

		setcategoryState({
			...categoryState,
			[categoryName]: newRewardsOfCategory
		});
	}, [ categoryState, getCategoryName, actionsHistory ]);

	const saveLocalState = useCallback(() => {
		localStorage.setItem(localStateStorageKey, JSON.stringify(categoryState));

	}, [ categoryState ])

	return <Provider value={{ categoryState, moveReward, removeReward, saveLocalState, undo }} > {children} </Provider>

};

export { CategoryProvider, CategoryConsumer, CategoryContext };