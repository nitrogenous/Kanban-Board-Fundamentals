import React, { useState, useContext, useEffect } from 'react';
import '../../Styles/Containers/Main/Table.css';
import RewardItem from '../../Components/Table/RewardItem';
import CategoryItem from '../../Components/Table/CategoryItem';
import { CategoryContext } from '../../Providers/CategoryProvider';

export const rewards = [{id: 0, name: 'R1'}, {id: 1, name: 'R2'}, {id: 2, name: 'R3'}, {id: 3, name: 'R4'}];

const Table = () => {
	const { categoryState, saveLocalState, undo, redo } = useContext(CategoryContext);

	useEffect(() => {
		console.log(categoryState)
	})

	return (
		<div className='table'>
			<button onClick={saveLocalState} >Save</button>
			<button onClick={undo} >Undo</button>
			<button onClick={redo} >Redo</button>
			<div id='rewards' className='rewardsColumnWrapper'>
				<span className='title' >Rewards</span>
				<div className='rewardItemsWrapper'>
					{
						rewards.map((reward, rewardIndex) => {
							return <RewardItem key={reward.id} reward={reward} />
						})
					}
				</div>
			</div>
			<div id='categories' className='categoryColumnsWrapper'>
				<span className='title' >Categories</span>
				<div  className='categoryItemsWrapper'>
					{
						Object.keys(categoryState).map((categoryName, categoryIndex) => {
							return (
								<CategoryItem key={categoryIndex} name={categoryName} index={categoryIndex} rewards={categoryState[categoryName]} />
							);
						})
					}
				</div>
			</div>
		</div>
	);
};

export default Table;