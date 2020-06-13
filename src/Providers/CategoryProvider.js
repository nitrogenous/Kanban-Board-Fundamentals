import React, { useState, useEffect, createContext } from 'react';

const CategoryContext = createContext();
const { Provider, Consumer: CategoryConsumer } = CategoryContext;

const initalCategoryState = {
	'C1': ['R1', 'R2'], 
	'C2': [], 
	'C3': [], 
	'C4': ['R1'],
	'C5': []
};

const CategoryProvider = ({ children }) => {
	const [categoryState, setcategoryState] = useState(initalCategoryState);

	useEffect(() => {
		console.log('CATEGORY TEST: ',categoryState)
	})

	const addReward = (rewardName, rewardIndex, categoryIndex) => {
		let categoryName = getCategoryName(categoryIndex);
		let rewardsOfCategory = categoryState[categoryName];

		rewardsOfCategory[rewardIndex] = rewardName;
	};

	const removeReward = (details) => {
		console.log(details)
	};

	const getCategoryName = (categoryIndex) => {
		return Object.keys(categoryState)[categoryIndex];
	};


	return <Provider value={{ categoryState, addReward, removeReward }} > {children} </Provider>

};




export { CategoryProvider, CategoryConsumer, CategoryContext };