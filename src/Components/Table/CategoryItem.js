import React, { useEffect, useContext } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';
import RewardItem from '../../Components/Table/RewardItem';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';

const CategoryItem = ( props ) => {
	var { dragAndDropState, onDragOver, onDrop  } = useContext(DragAndDropContext);

	useEffect(() => {
		console.log(dragAndDropState);
	})

	return (
		<div className='categoryItemWrapper'
			onDragOver = {onDragOver}
			onDrop = {() => onDrop(props.index)}
		>
			<span className='categoryItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default CategoryItem;