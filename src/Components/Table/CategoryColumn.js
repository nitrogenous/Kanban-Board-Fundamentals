import React, { useContext } from 'react';
import RewardBox from './RewardBox';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';

const CategoryColumn = ( props ) => {
	var { onDragOver, onDrop  } = useContext(DragAndDropContext);

	return (
		<div className='categoryColumnWrapper'
			onDragOver = {onDragOver}
			onDrop = {() => onDrop(props.index)}
		>
			<span className='categoryColumnTitle'>
				{ props.name }
			</span>
			<div>
				{
					(props.rewards).map((reward) => {
						return (
							<RewardBox key={reward.id} reward={reward} categoryIndex={props.index} closeButton={true}/>
						)
					})
				}
			</div>
		</div>
	);
};

export default CategoryColumn;