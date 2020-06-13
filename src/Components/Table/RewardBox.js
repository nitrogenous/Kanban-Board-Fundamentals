import React, { useContext } from 'react';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';
import { CategoryContext } from '../../Providers/CategoryProvider';

const RewardBox = ({reward,categoryIndex= -1,closeButtonVisible}) => {
	var { onDragStart } = useContext(DragAndDropContext);
	var { removeReward } = useContext(CategoryContext);

	return (
		<div 
			className='rewardBoxWrapper' 
			draggable="true" 
			onDragStart={() => {
				onDragStart(reward, categoryIndex)
			}}
		>
			<span className='rewardBoxTitle'>
				{ reward.name }
			</span>
			{ 
				closeButtonVisible && <button className='rewardBoxCloseButton' onClick={() => {removeReward(reward, categoryIndex)}}> X </button>
			}
		</div>
	);
};

export default RewardBox;