import React , {Component} from 'react'
import ReactDom from 'react-dom'

import TodoItems from './TodoItems.js'
import CountUp from './countUp.js'

import AutoFocusWithRef from './AutoFocusWithRef.js'
import Alert from './Alert.js';


class MyApp extends Component {

	componentDidMount() {
		this.thisComponentNodes.GetFocus(); {/* access to a function in other Component with resf and nod */}
	}
	// body...
	render() {

		return (
			<div className="container">
				<TodoItems />
				<CountUp />
			    {/* refs and nodes */}
			    <AutoFocusWithRef ref={(node) => this.thisComponentNodes = node} />

				{/* work with children s  */}
			    <Alert type="danger" title="alert title">
			    	this text is massage
			    </Alert>
				{/*  .\ work with children s  */}

			</div>
		)
	}

}

ReactDom.render(<MyApp />,document.getElementById('my-app'));