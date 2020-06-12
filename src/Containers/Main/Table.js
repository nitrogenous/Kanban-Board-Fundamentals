import React, { useState, useEffect } from 'react';
import '../../Styles/Containers/Main/Table.css';
import RewardItem from '../../Components/Table/RewardItem';
import CategoryItem from '../../Components/Table/CategoryItem';

const Table = () => {
	const [test, setTest] = useState('Test');
	const [rewards, setRewards] = useState(['R1', 'R2', 'R3', 'R4']);
	const [categories, setCategories] = useState(['C1', 'C2', 'C3', 'C4']);

	return (
		<div class='table'>
			<div id='rewards' class='rewardsColumnWrapper'>
				<span class='title' >Rewards</span>
				<div class='rewardItemsWrapper'>
					{
						rewards.map((value, index) => {
							return <RewardItem key={index} name={value} />
						})
					}
				</div>
			</div>
			<div id='categories' class='categoryColumnsWrapper'>
				<span class='title' >Categories</span>
				<div  class='categoryItemsWrapper'>
					{
						categories.map((value, index) => {
							return <CategoryItem key={index} name={value}/>
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Table;