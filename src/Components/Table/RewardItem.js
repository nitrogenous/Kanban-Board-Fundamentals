import React, { useContext } from 'react';
import '../../Styles/Components/Table/RewardItem.css';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';
import { CategoryContext } from '../../Providers/CategoryProvider';

const RewardItem = (props) => {
	var { onDragStart } = useContext(DragAndDropContext);
	var { removeReward } = useContext(CategoryContext);

	return (
		<div 
			className='rewardItemWrapper' 
			draggable="true" 
			onDragStart={() => {
				onDragStart(props.name, props.index, props.categoryIndex || -1)
			}}
		>
			<span className='rewardItemTitle'>
				{ props.name }
			</span>
			{ 
				props.closeButton && <span class='rewardItemCloseButton' onClick={() => {removeReward(props.name, props.index, props.categoryIndex)}}> X </span>
			}
		</div>
	);
};

export default RewardItem;