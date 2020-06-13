import React, { useState, createContex } from 'react';

const CategoryEditContext = createContex();
const { Provider, Consumer: CategoryEditConsumer };

const initalCategoryEditState = {
	categories: {},

};

const CategoryEditProvider = ({ children }) => {
	const [categoryEditState, setcategoryEditState] = useState(initalCategoryEditState);

	const addRewardToCategory = (rewardDetails, categoryId) => {

	};

	const removeRewardFromCategory = (rewardDetails, categoryId) => {

	};

	const updateTheCategoryRewards = (categoryId) => {

	};

	return <Provider value={{ categoryEditState }} > {children} </Provider>

};

export { CategoryEditProvider, CategoryEditConsumer, CategoryEditContext };