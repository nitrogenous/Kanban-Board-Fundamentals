import React, { useState } from 'react';
import '../../Styles/Containers/Main/Table.css';
import RewardItem from '../../Components/Table/RewardItem';
import CategoryItem from '../../Components/Table/CategoryItem';

const Table = () => {
	const rewards = ['R1', 'R2', 'R3', 'R4'];
	const [categories, setCategories] = useState({
		'C1': [], 
		'C2': [], 
		'C3': [], 
		'C4': []
	});

	return (
		<div className='table'>
			<div id='rewards' className='rewardsColumnWrapper'>
				<span className='title' >Rewards</span>
				<div className='rewardItemsWrapper'>
					{
						rewards.map((reward, rewardIndex) => {
							return <RewardItem key={rewardIndex} name={reward} index={rewardIndex}/>
						})
					}
				</div>
			</div>
			<div id='categories' className='categoryColumnsWrapper'>
				<span className='title' >Categories</span>
				<div  className='categoryItemsWrapper'>
					{
						Object.keys(categories).map((categoryName, categoryIndex) => {
							return (
								<CategoryItem key={categoryIndex} name={categoryName} index={categoryIndex}/>
							);
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Table;