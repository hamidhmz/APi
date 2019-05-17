import React,{Component} from 'react'

export default class TodoList extends Component {

	constructor(){
		super()

		// this.mycheckbox = this.mycheckbox.bind(this);
	}

	mycheckbox(event) {
		// console.log('changed input id => ' +event.target.id)
		// console.log('changed input id => ' +event.target.checked);
		if(event.target.checked){

			$("#li"+event.target.id+" label").css({
				"text-decoration": "line-through",
				"color": "rgba(0,0,0,.3)"
			});
		}else {
			$("#li"+event.target.id+" label").css({
				"text-decoration": "",
				"color": "rgba(0,0,0,1)"
			});
		}
	}


	render (){

		return (
			<li className="list-group-item" id={'li'+this.props.item.id}>
				
				<div className="form-group form-check">
				    <input type="checkbox" 
				    	className="form-check-input" 
				    	id={this.props.item.id}
				    	defaultChecked={(this.props.item.status == 1 ) ? 'checked' : '' } //if no use data from this.state.
						// checked={(this.props.item.status == 1 ) ? 'checked' : '' } // if you use true or fale from this.state.
				    	onChange={this.mycheckbox}
				    />
				    <label className="form-check-label" htmlFor={this.props.item.id}>{ this.props.item.title }</label>
				</div>
			</li>

		)
	}
}

