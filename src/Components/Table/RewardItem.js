import React, { useState, useEffect } from 'react';
import '../../Styles/Components/Table/RewardItem.css';

const RewardItem = (props) => {
	const [ details, setDetails ] = useState(props);

	// useEffect(() => {
	// 	setDetails(props);
	// }, [ props ]);

	return (
		<div class='rewardItemWrapper'>
			<span>
				{ props.name }
			</span>
		</div>
	);
};

export default RewardItem;