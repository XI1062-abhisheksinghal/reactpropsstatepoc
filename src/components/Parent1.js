import React from 'react';
import Child1 from './Child1'


//class based component , here the state is referenced using the this.state 
// Function based component , we use the syntax as eg (personState, setPersonState)= useState({})
//can pass methods as props 
class Parent1 extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			number1: '',
			number2: '',
			operation: '',
			aloowedoperation: ["+", "-", "/", "*"],
		};
	};

	onValueChange = event => {

		console.log("inside the onvaluechange")
		this.setState({

			[event.target.name]: event.target.value
		})
	}
	onValueChangeoperation = event => {
		if (this.state.aloowedoperation.includes(event.target.value)) {
			console.log("inside the allowed operation")
			this.setState({

				[event.target.name]: event.target.value
			})
		} else {
			console.log("Illegal operation");
		}
	}

	onSubmit = event => {
		console.log("Submit button clicked!!");
	}

	render() {
		return (

			<div>
				<Child1 name="learning react, hello Corona days"> "This is an example of props childern"</Child1>

				<label>  number1 <input type="text" pattern="[0-9]*" onChange={this.onValueChange} /></label>
				<label> number2 <input type="text" pattern="[0-9]*" onChange={this.onValueChange} /></label>
				<label>operation <input type="text" onChange={this.onValueChangeoperation} /></label>
				<button type="button" onClick={this.onSubmit}></button>
			</div>
		);

	}

}

export default Parent1;