import React, { useState, createContext, useEffect, useContext } from 'react';
import { CategoryContext } from './CategoryProvider';

const DragAndDropContext = createContext();
const { Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;


const initalDragAndDropState = {
	reward: {},
	indexOfDraggedFrom: null,
	indexOfDraggedTo: null,
	isDragging: false
};

const DragAndDropProvider = ({ children }) => {
	const [ dragAndDropState, setDragAndDropState ] = useState(initalDragAndDropState);
	const { moveReward } = useContext(CategoryContext);

	useEffect(() => {
		console.log('DND TEST:  ', dragAndDropState);
	})

	const onDragStart = (reward, indexOfDraggedFrom) => {
		setDragAndDropState({
			...dragAndDropState,
			reward,
			indexOfDraggedFrom,
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
		
		moveReward(
			dragAndDropState.reward,
			indexOfDraggedTo,
			dragAndDropState.indexOfDraggedFrom
		);
	};

	const onDragLeave = (indexOfDraggedTo) => {
		setDragAndDropState({
			...dragAndDropState,
			indexOfDraggedTo: null,
			isDragging: false
		});
	};


	return <Provider value={{ dragAndDropState, onDragStart, onDragOver, onDrop, onDragLeave }}> {children} </Provider>
}


export { DragAndDropProvider, DragAndDropConsumer, DragAndDropContext };