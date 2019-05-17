import React from 'react'

function Footer() {
	// body...
	const styles = {
		// font-size : "3em"  
		fontSize : "3em",
		// ...
	};
	let n = 1; 
	if (n='1') {
		styles.color = 'red'
	}
	return (
		<footer style={styles}>
			<p>this is footer Elements</p>
		</footer>
	);
}


export default Footer