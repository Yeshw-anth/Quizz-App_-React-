import React,{Component} from 'react'

export default class App extends Component{
	render(){
	return(
		<div>One
            <h1>{this.props.Mobile}</h1>
            <p>Mobile cost is : {this.props.cost}</p>
        </div>
	)
	}
}
