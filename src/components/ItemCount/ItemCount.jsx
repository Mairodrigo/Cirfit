import React, { useState } from "react";

const ItemCount = () => {
	const [count, setCount] = useState(1);

	return (
		<>
        
			<span>{count}</span>
		</>
	);
};

export default ItemCount;
