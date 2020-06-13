import React, { useContext } from 'react';
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
				closeButton && <button className='rewardItemCloseButton' onClick={() => {removeReward(reward, categoryIndex)}}> X </button>
			}
		</div>
	);
};

export default RewardItem;