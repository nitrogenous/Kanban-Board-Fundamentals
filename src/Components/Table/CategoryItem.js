import React, { useState, useEffect, useContext } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';
import RewardItem from '../../Components/Table/RewardItem';
import { DragAndDropContext } from '../../Providers/DragAndDrop';

const CategoryItem = ( props ) => {
	const [ details, setDetails ] = useState(props);

	var { dragAndDropState, onDragOver, onDrop  } = useContext(DragAndDropContext);

	useEffect(() => {
		console.log(dragAndDropState)
	});

	return (
		<div className='categoryItemWrapper'
			onDragOver = {onDragOver}
			onDrop = {() => onDrop(props.name)}
		>
			<span className='categoryItemTitle'>
				{ props.name }
			</span>
			<div>
				<RewardItem name='R1' categoryName={props.name} draggedFrom={props.name}/>
				<RewardItem name='R2'/>
			</div>
		</div>
	);
};

export default CategoryItem;