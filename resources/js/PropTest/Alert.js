import React from 'react';
import PropTypes from 'prop-types';


export default class Alert extends React.Component {

	

	constructor (){
		super()

	}

	render() {
		const children = this.props.children ;
		const title = this.props.title;
		const type = this.props.type;

		return (
			<div>
				<div className={'alert alert-'+type+' alert-dismissible fade show'} role="alert">
				    <strong>{ title }</strong><br/>
				    <p> { children }</p>	
				    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
				        <span aria-hidden="true">&times;</span>
				    </button>
				</div>
			</div>
		)
	}
}
Alert.defaultProps = {
	type : 'success'
}
Alert.propTypes = {
	children : PropTypes.string.isRequired,
	title : PropTypes.string.isRequired,
	type : PropTypes.oneOf(['success', 'danger','warning']),

}