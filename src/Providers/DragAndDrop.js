import React, { useState, createContext } from 'react';

const DragAndDropContext = createContext();
const {Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;

const initalDragAndDropState = {
	draggingElement: '',
	draggedFrom: null,
	draggedTo: null,
	isDragging: false
};

const DragAndDropProvider = ({ children }) => {
	const [ dragAndDropState, setDragAndDropState ] = useState(initalDragAndDropState);

	const onDragStart = (draggingElement, draggedFrom) => {
		console.log(draggingElement, draggedFrom)
		setDragAndDropState({
			...dragAndDropState,
			draggingElement: draggingElement,
			draggedFrom: draggedFrom,
			draggedTo: null,
			isDragging: true
		});
	}

	const onDragOver = (event) => {
		event.preventDefault();
	};

	const onDrop = (draggedTo) => {
		setDragAndDropState({
			...dragAndDropState,
			draggedTo: draggedTo,
			isDragging: false
		});
	}

	return <Provider value={{ dragAndDropState, onDragStart, onDragOver, onDrop }}> {children} </Provider>
}



export { DragAndDropProvider, DragAndDropConsumer, DragAndDropContext };