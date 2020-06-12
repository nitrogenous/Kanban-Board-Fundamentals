import React, { useState, useEffect } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';

const CategoryItem = (props) => {
	const [ details, setDetails ] = useState(props);

	useEffect(() => {
		setDetails(props);
	}, [ props ]);

	return (
		<div className='categoryItemWrapper'>
			<span className='categoryItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default CategoryItem;