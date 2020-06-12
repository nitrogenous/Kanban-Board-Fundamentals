import React, { useState, useEffect } from 'react';

const CategoryItem = (props) => {
	const [ details, setDetails ] = useState(props);

	useEffect(() => {
		setDetails(props);
	}, [ props ]);

	return (
		<div>
			<span>
				{ props.name }
			</span>
		</div>
	);
};

export default CategoryItem;