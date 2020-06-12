import React, { useState, useEffect } from 'react';
import '../../Styles/Components/Table/RewardItem.css';

const RewardItem = (props) => {
	const [ details, setDetails ] = useState(props);

	// useEffect(() => {
	// 	setDetails(props);
	// }, [ props ]);

	return (
		<div className='rewardItemWrapper'  draggable="true" onDragStart={() => {console.log('ehe')}}>
			<span className='rewardItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default RewardItem;