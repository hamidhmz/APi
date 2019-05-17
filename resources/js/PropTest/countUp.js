import React , {Component} from 'react'

export default class CountUp extends Component {
	constructor () {

		super()
		this.state = {
			count : 0
		}
		this.handelCount = this.handelCount.bind(this)
	}
	// componetDidMount() {

	// }

	handelCount(event) {
		// console.log(event.target.id)
		if (event.target.id === "up") {
			this.setState((prevState) => {
				return{
					count : prevState.count += 1
				}
				
			})
		}else if (event.target.id === "down"){
			this.setState((prevState) => {
				return {
					count : prevState.count -= 1 
				}
			})
		}
	}

	render () {
		return (
			<div className="card">
				<div className="card-body">
				    <h1>{this.state.count} </h1>
				    <button onClick={this.handelCount} id="up" className="btn btn-primary">count Up</button>
				    <button onClick={this.handelCount} id="down" className="btn btn-danger">count Down</button>
				</div>
			</div>
		)
	}
}