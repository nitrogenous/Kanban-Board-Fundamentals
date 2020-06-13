import React, { useEffect, useContext } from 'react';
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
					(props.rewards).map((reward) => {
						return (
							<RewardItem key={reward.id} reward={reward} categoryIndex={props.index} closeButton={true}/>
						)
					})
				}
			</div>
		</div>
	);
};

export default CategoryItem;