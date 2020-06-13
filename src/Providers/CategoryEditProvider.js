import React, { useState, createContext } from 'react';

const CategoryEditContext = createContext();
const { Provider, Consumer: CategoryEditConsumer } = CategoryEditContext;

const initalCategoryEditState = {
	categories: {}

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