import React ,{ Component } from 'react';

export default class AutoFocusWithRef extends Component {
	
	constructor () {
		super()

		this.GetFocus = this.GetFocus.bind(this);
	}
	GetFocus () {
		console.log(this.inputText);
		this.inputText.focus();
	}

	render(){
		return  (
			<div>
				<input type="text" ref={(node) => this.inputText = node } />

				<button onClick={this.GetFocus}>focus</button>
			</div>
		)
	}
}