import React, { useState } from 'react';

const Table = () => {
	const [test, setTest] = useState('Test');

	return (
		<div>
			{test}
		</div>
	);
};

export default Table;