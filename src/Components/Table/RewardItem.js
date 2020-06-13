import React, { useContext } from 'react';
import '../../Styles/Components/Table/RewardItem.css';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';
import { CategoryContext } from '../../Providers/CategoryProvider';

const RewardItem = ({reward,categoryIndex= -1,closeButton}) => {
	var { onDragStart } = useContext(DragAndDropContext);
	var { removeReward } = useContext(CategoryContext);

	return (
		<div 
			className='rewardItemWrapper' 
			draggable="true" 
			onDragStart={() => {
				onDragStart(reward, categoryIndex)
			}}
		>
			<span className='rewardItemTitle'>
				{ reward.name }
			</span>
			{ 
				closeButton && <span className='rewardItemCloseButton' onClick={() => {removeReward(reward, categoryIndex)}}> X </span>
			}
		</div>
	);
};

export default RewardItem;