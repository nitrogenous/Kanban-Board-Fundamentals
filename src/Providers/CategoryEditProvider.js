import React, { useState, useEffect, createContext } from 'react';

const CategoryEditContext = createContext();
const { Provider, Consumer: CategoryEditConsumer } = CategoryEditContext;

const initalCategoryEditState = {
	categories: {}
};

const CategoryEditProvider = ({ children }) => {
	const [categoryEditState, setcategoryEditState] = useState(initalCategoryEditState);

	useEffect(() => {
		console.log(categoryEditState)
	})

	const initCategories = (newCategories) => {
		setcategoryEditState({
			...categoryEditState,
			categories: newCategories
		});
	};

	const addReward = (draggingDetails) => {

	};

	const removeReward = (draggingDetails) => {

	};


	return <Provider value={{ categoryEditState, initCategories, addReward, removeReward }} > {children} </Provider>

};




export { CategoryEditProvider, CategoryEditConsumer, CategoryEditContext };