import React from 'react'
import ReactDom from 'react-dom'

import Header from './components/Header.js'
import MainContent from './components/MainContent.js'
import Footer from './components/Footer.js'

function MyApp() {
	// body...
	return (
		<div class="container">
			<Header />
			<MainContent />
			<Footer />
		</div>
	)
}

ReactDom.render(<MyApp />,document.getElementById('my-app'));