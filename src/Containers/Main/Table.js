import React, { useContext, useEffect } from 'react';
import RewardBox from '../../Components/Table/RewardBox';
import CategoryColumn from '../../Components/Table/CategoryColumn';
import { CategoryContext } from '../../Providers/CategoryProvider';

export const rewards = [{id: 0, name: 'R1'}, {id: 1, name: 'R2'}, {id: 2, name: 'R3'}, {id: 3, name: 'R4'}];

const Table = () => {
	const { categoryState, saveLocalState, undo, redo } = useContext(CategoryContext);

	useEffect(() => {
		console.log(categoryState)
	})

	return (
		<div>
			<div className='controlBar'>
				<span className='projectName'>Get Miles Coding Challenge</span>
				<button className='menuButton save' onClick={saveLocalState} >Save</button>
				<button className='menuButton undo' onClick={undo} >Undo</button>
				<button className='menuButton redo' onClick={redo} >Redo</button>
			</div>
			<div className='table'>
				<div id='rewards' className='rewardsColumnWrapper'>
					<span className='title' >Rewards</span>
					<div className='rewardBoxsWrapper'>
						{
							rewards.map((reward, rewardIndex) => {
								return <RewardBox key={reward.id} reward={reward} />
							})
						}
					</div>
				</div>
				<div id='categories' className='categoryColumnsWrapper'>
					<span className='title' >Categories</span>
					<div  className='categoryColumns'>
						{
							Object.keys(categoryState).map((categoryName, categoryIndex) => {
								return (
									<CategoryColumn key={categoryIndex} name={categoryName} index={categoryIndex} rewards={categoryState[categoryName]} />
								);
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Table;