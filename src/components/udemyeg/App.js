import React,{Component} from 'react';
import Validation from './Validation';

import Char from './Char';

class App extends Component{


   state ={
       userInput:''
   } 
   onChangeHandler=(event)=>{

      this.setState({userInput:event.target.value})
   }

   deleteCharHandler=(index)=>{

		const text = this.state.userInput.split('');
		text.splice(index,1);
		const updatedTo= text.join('');

		this.setState({userInput:updatedTo});

   }
   

	render(){
		const charList = this.state.userInput.split('').map((ch,index)=>{
			return <Char 
			character={ch} 
			key={index}
			clicked={this.deleCharHandler(index)()}/>;
		});
		return(

			<div>
			<input type="text" onChange= {this.onChangeHandler} 
			value ={this.state.userInput}/>
			<Validation inputLength={this.state.userInput.length}/>
			<div>
			{charList}
			</div>
			</div>
		)
	}
}

export default App;