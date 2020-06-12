import React, { useState, createContext } from 'react';

const DragAndDropContext = createContext();
const {Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;

const initalDragAndDropState = {
	draggingElement: '',
	draggingElementIndex: 0, 
	indexOfDraggedFrom: null,
	indexOfDraggedTo: null,
	isDragging: false
};

const DragAndDropProvider = ({ children }) => {
	const [ dragAndDropState, setDragAndDropState ] = useState(initalDragAndDropState);

	const onDragStart = (draggingElement, draggingElementIndex, indexOfDraggedFrom) => {
		setDragAndDropState({
			...dragAndDropState,
			draggingElement: draggingElement,
			draggingElementIndex: draggingElementIndex,
			indexOfDraggedFrom: indexOfDraggedFrom,
			indexOfDraggedTo: null,
			isDragging: true
		});
	}

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const onDrop = (indexOfDraggedTo) => {
		setDragAndDropState({
			...dragAndDropState,
			indexOfDraggedTo: indexOfDraggedTo,
			isDragging: false
		});
	}

	const onDragLeave = () => {
		setDragAndDropState({
			...dragAndDropState,
			indexOfDraggedTo: null
		});
	}

	return <Provider value={{ dragAndDropState, onDragStart, onDragOver, onDrop, onDragLeave }}> {children} </Provider>
}



export { DragAndDropProvider, DragAndDropConsumer, DragAndDropContext };