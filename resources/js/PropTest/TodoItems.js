import React, {Component} from 'react'

import TodoList from './TodoList.js'

// import todoData from './todoData.js'

export default class TodoItems extends Component {
	constructor(props) {
		super(props)
		this.state = {
			items : []
		}
	}
	componentDidMount() {
	    fetch("api/getTodos")
	      .then(res => res.json())
	      .then(
	        (result) => {
	          this.setState({
	            
	            items: result.items
	          });
	        },
	        
	        (error) => {
	          this.setState({
	            
	            error
	          });
	        }
	      )
	    
	  }

	render (){ 
		
		if (this.state.error) {
	      return <div>Error: {this.state.error.message}</div>;
	    }  else {
			return  (
				<div>
					<ul className="list-group">
						{
							this.state.items.map((item,index) => {
								return (
									<TodoList key={item.id} item={item}/>
									// <li className="list-group-item" key={item.id} >{item.title} </li>
								)
							})
						}
					  
					   
					</ul>
				</div>
			);
		}
	}
	
}

