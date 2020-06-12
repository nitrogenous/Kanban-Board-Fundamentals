import React, { useState, useEffect } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';

const CategoryItem = (props) => {
	const [ details, setDetails ] = useState(props);

	useEffect(() => {
		setDetails(props);
	}, [ props ]);

	return (
		<div class='categoryItemWrapper'>
			<span class='categoryItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default CategoryItem;