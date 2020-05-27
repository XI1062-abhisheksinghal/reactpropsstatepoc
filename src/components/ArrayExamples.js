import React from 'react';
import Button from '@material-ui/core/Button';

class ArrayExample extends React.Component {

    constructor(){
		super();
		this.state={
			 fruitsarr:["Orange", "Pineapple","Apple"],
			 //these operations will add or delete the fruit in fruitsarr
			 showButton: false
		}
	}


	addFruit=(newFruits)=>{
		console.log("inside add fruit function"+ newFruits)
		
		this.setState({
           fruitsarr: [newFruits]
	   })
	}

	deleteAllFruit=()=>{
	   console.log("inside delete all fruit")
	   this.setState({
           fruitsarr:[]
	   })

	}

	editFruit(){


	}

	clearFruit(){
          

	}
	onClicked = () => {
		console.log("clicked");
		this.setState({

			showButton: true
		})
	}
	
	


	render(){
      return(
        <div>
	       <p> Existing fruits</p>
		   <ul>
			   {
				   this.state.fruitsarr.map(item =>(
				   <li key={item}> {item}</li>
	               ))
			   }
		   </ul>
		   
		   <Button variant="contained" color="primary" onClick={this.onClicked}>
             Operation to perform on fruits
           </Button>

		   {this.state.showButton && (
		   <div>
		   <Button variant="contained" color="primary" onClick={this.addFruit.bind(this,
			
			["Orange", "Pineapple","Apple"])}>
             Add Fruit
		   </Button>
		   <Button variant="contained" color="secondary" onClick={this.deleteAllFruit}>
             Delete All Fruit
		   </Button>
		   </div>
		   )}
		</div>
		  
	 );

	}

}

export default ArrayExample;