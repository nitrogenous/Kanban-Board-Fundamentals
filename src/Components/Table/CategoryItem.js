import React, { useEffect, useContext } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';
import RewardItem from '../../Components/Table/RewardItem';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';

const CategoryItem = ( props ) => {
	var { dragAndDropState, onDragOver, onDrop  } = useContext(DragAndDropContext);

	return (
		<div className='categoryItemWrapper'
			onDragOver = {onDragOver}
			onDrop = {() => onDrop(props.index)}
		>
			<span className='categoryItemTitle'>
				{ props.name }
			</span>
			<div>
				{
					(props.rewards).map((rewardName, rewardIndex) => {
						return (
							<RewardItem key={rewardIndex} name={rewardName} index={rewardIndex} />
						)
					})
				}
			</div>
		</div>
	);
};

export default CategoryItem;