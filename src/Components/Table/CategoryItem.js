import React, { useState, useEffect } from 'react';
import '../../Styles/Components/Table/CategoryItem.css';

const CategoryItem = (props) => {
	const [ details, setDetails ] = useState(props);

	useEffect(() => {
		setDetails(props);
	}, [ props ]);

	return (
		<div className='categoryItemWrapper' onDrop={() => {console.log('onDrob' + props.name)}} onDragOver={(event) => {console.log('drag over'); event.preventDefault();}}>
			<span className='categoryItemTitle'>
				{ props.name }
			</span>
		</div>
	);
};

export default CategoryItem;