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
		console.log(categoryState)
	})

	const addReward = (details) => {
	};

	const removeReward = (details) => {
		console.log(details)
	};


	return <Provider value={{ categoryState, addReward, removeReward }} > {children} </Provider>

};




export { CategoryProvider, CategoryConsumer, CategoryContext };