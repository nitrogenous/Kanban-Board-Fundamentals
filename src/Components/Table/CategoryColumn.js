import React, { useContext } from 'react';
import { DragAndDropContext } from '../../Providers/DragAndDropProvider';
import RewardBox from './RewardBox';

const CategoryColumn = ( props ) => {
	var { onDragOver, onDrop  } = useContext(DragAndDropContext);

	return (
		<div className='categoryColumnWrapper'
			onDragOver = {onDragOver}
			onDrop = {() => onDrop(props.index)}
		>
			<span className='categoryColumnTitle'>
				{props.name}
			</span>
			<div>
				{
					(props.rewards).map((reward) => {
						return (
							<RewardBox key={reward.id} reward={reward} categoryIndex={props.index} closeButtonVisible={true}/>
						)
					})
				}
			</div>
		</div>
	);
};

export default CategoryColumn;