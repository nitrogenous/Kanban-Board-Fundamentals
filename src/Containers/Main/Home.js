import React, { useState } from 'react';

const Home = () => {
	const [test, setTest] = useState('Test');

	return (
		<div>
			{test}
		</div>
	);
};

export default Home;