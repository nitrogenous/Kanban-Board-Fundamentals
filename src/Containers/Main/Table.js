import React, { useState, useEffect } from 'react';
import CategoryItem from '../../Components/Table/CategoryItem';
import RewardItem from '../../Components/Table/RewardItem';

const Table = () => {
	const [test, setTest] = useState('Test');
	const [rewards, setRewards] = useState(['R1', 'R2', 'R3', 'R4']);
	const [categories, setCategories] = useState(['C1', 'C2', 'C3', 'C4']);

	return (
		<div style={{display: 'flex'}}>
			<div id='rewards'>
				<span>Rewards</span>
				{
					rewards.map((value, index) => {
						return <RewardItem key={index} name={value} />
					})
				}
			</div>
			<div id='categories' style={{display: 'flex'}}>
				<span>Categories</span>
				{
					categories.map((value, index) => {
						return <CategoryItem key={index} />
					})
				}
			</div>
		</div>
	);
};

export default Table;