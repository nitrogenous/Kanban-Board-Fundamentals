import React, { useState, createContext } from 'react';

const DragAndDropContext = createContext();
const {Provider, Consumer: DragAndDropConsumer } = DragAndDropContext;

const initalDragAndDropState = {
	draggingElement: '',
	draggingElementIndex: 0, 
	draggedFrom: null,
	draggedTo: null,
	isDragging: false
};

const DragAndDropProvider = ({ children }) => {
	const [ dragAndDropState, setDragAndDropState ] = useState(initalDragAndDropState);

	const onDragStart = (draggingElement, draggingElementIndex, draggedFrom) => {
		setDragAndDropState({
			...dragAndDropState,
			draggingElement: draggingElement,
			draggingElementIndex: draggingElementIndex,
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

	const onDragLeave = () => {
		setDragAndDropState({
			...dragAndDropState,
			draggedTo: null
		});
	}

	return <Provider value={{ dragAndDropState, onDragStart, onDragOver, onDrop, onDragLeave }}> {children} </Provider>
}



export { DragAndDropProvider, DragAndDropConsumer, DragAndDropContext };