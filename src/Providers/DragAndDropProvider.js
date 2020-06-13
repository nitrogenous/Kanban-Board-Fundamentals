import React, { useState, createContext, useEffect, useContext } from 'react';
import { CategoryContext } from './CategoryProvider';

const DragAndDropContext = createContext();
const { Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;


const initalDragAndDropState = {
	rewardName: '',
	rewardIndex: 0, 
	indexOfDraggedFrom: null,
	indexOfDraggedTo: null,
	isDragging: false
};

const DragAndDropProvider = ({ children }) => {
	const [ dragAndDropState, setDragAndDropState ] = useState(initalDragAndDropState);
	const { categoryState, addReward, removeReward } = useContext(CategoryContext);

	useEffect(() => {
		console.log('DND TEST:  ', dragAndDropState);
	}, [dragAndDropState])

	const onDragStart = (rewardName, rewardIndex, indexOfDraggedFrom) => {
		setDragAndDropState({
			...dragAndDropState,
			rewardName: rewardName,
			rewardIndex: rewardIndex,
			indexOfDraggedFrom: indexOfDraggedFrom,
			indexOfDraggedTo: null,
			isDragging: true
		});
	};

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const onDrop = (indexOfDraggedTo) => {
		setDragAndDropState({
			...dragAndDropState,
			indexOfDraggedTo: indexOfDraggedTo,
			isDragging: false
		});
		
		createNewReward(indexOfDraggedTo);
	};

	const onDragLeave = (indexOfDraggedTo) => {
		setDragAndDropState({
			...dragAndDropState,
			indexOfDraggedTo: null,
			isDragging: false
		});
	};

	const createNewReward = (categoryIndex) => {
		addReward({
			rewardName: dragAndDropState.rewardName,
			rewardIndex: dragAndDropState.rewardIndex,
			categoryIndex: categoryIndex
		});
	}

	const updateTheCategoryOfReward = () => {
		removeReward({
			rewardName: dragAndDropState.rewardName,
			rewardIndex: dragAndDropState.rewardIndex,
			categoryIndex: dragAndDropState.indexOfDraggedFrom
		});

		createNewReward();
	};

	return <Provider value={{ dragAndDropState, onDragStart, onDragOver, onDrop, onDragLeave }}> {children} </Provider>
}


export { DragAndDropProvider, DragAndDropConsumer, DragAndDropContext };