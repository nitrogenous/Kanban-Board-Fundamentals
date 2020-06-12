import React, { useState, useEffect, useContext } from 'react';
import '../../Styles/Components/Table/RewardItem.css';
import { DragAndDropContext } from '../../Providers/DragAndDrop';


const RewardItem = (props) => {
	const [ details, setDetails ] = useState(props);

	var { onDragStart } = useContext(DragAndDropContext);

	// useEffect(() => {
	// 	setDetails(props);
	// }, [ props ]);

	return (
		<div 
			className='rewardItemWrapper' 
			draggable="true" 
			onDragStart={() => {onDragStart(props.name, props.draggedFrom || 'Menu')}}
		>
			<span className='rewardItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default RewardItem;