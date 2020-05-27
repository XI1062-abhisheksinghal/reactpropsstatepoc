import React from 'react';
import Button from '@material-ui/core/Button';
import employee from '../css/employee.css'
import { display, flexbox } from '@material-ui/system';
import DeleteIcon from '@material-ui/icons/Delete';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

class Tableg extends React.Component {

   
	constructor(props) {
		super(props);

		this.state = {
			//creating an employee data as array of employee object 
			
			employee: [
				{
					id: "1", firstName: "Abhishek", lastName: "Singhal", dept: "IT",
				},
				{
					id: "2", firstName: "Arun", lastName: "Singla", dept: "Mechanical"
				},
				{
					id: "3", firstName: "Shelly", lastName: "Jain", dept: "IT"
				}, {
					id: "4", firstName: "Loveleen", lastName: "Gupta", dept: "Medical"
				},
				{
					id: "5", firstName: "Zamgo", lastName: "Goel", dept: "NonMedical"
				}
			],
			show: true,
			swithSort: false
		}
	}


	//Use the API to fetch the data , axios for eg 



	handleSort =(key)=>{
        this.setState({
			swithSort:!this.state.swithSort
		})

		let copyTableData = [...this.state.employee];
		copyTableData.sort(this.compareByDesc(key));
		this.setState({
			employee:copyTableData
		})

	}

	compareByDesc(key){
		if(this.state.swithSort){
			return function(a,b){
				if(a[key]<b[key]) return -1;
				if(a[key]>b[key]) return 1;
				return 0;
			};
		}else{
			return function(a,b){
				if(a[key]>b[key]) return -1;
				if(a[key]<b[key]) return 1;
				return 0;
			};
		}
	}
	clearTableData=()=> {

		//clear all the rows from the table 
		console.log("inside setstate");
	    this.setState({
			show:!this.state.show
		})
			
	}
	addTableData() {

	}
    //Sorting on the basis of Coloumn clicked 
	renderTableHeader() {
		let header = Object.keys(this.state.employee[0])
		return header.map((key, index) => {
			return <th key={index} 
			a href ="#" id={key} key={key}
		    onClick={(e)=> this.handleSort(e.target.id)}>{key.toUpperCase()}</th>
		})
	}

	renderTableData() {
		return this.state.employee.map((employee, index) => {
			const { id, firstName, lastName, dept } = employee
			return (
				<tr key={id}>
					<td>{id} </td>
					<td>{firstName}</td>
					<td>{lastName}</td>
					<td>{dept}</td>
			       <td>{<div> <DeleteIcon onClick={this.deletRow}/> </div> }</td>
					<td>{<div><EditOutlinedIcon /></div> }</td>
				</tr>
			)
		})
	}
	renderData = () => {
     console.log("inside render data")
		return this.state.employee.map((employee) => {
			return (
				<div>
				<ul>
					<li>{employee.firstName}</li>
					<li>{employee.id}</li>
					<li>{employee.lastName}</li>
					<li>{employee.dept}</li>
				</ul>
				</div>
			)
		})
	}

	deletRow=(rowId)=>{
           // Array.prototype.filter returns new array
    // so we aren't mutating state here
    const arrayCopy = this.state.employee.filter((row) => row.id !== rowId);
    this.setState({employee: arrayCopy});
 
	}

	
   // single field select and filter data sorting on the basis of certain condition 
   //conditionally render the table data , keeping the header intact
	render() {

		

         //rendering table on button click 
		return (

         <div>
		   <div class="navbar" >
			   	<div>Contact</div>
     			<div>Careers</div>
  				<div>About</div>
		 </div>
		    <div className="students">
			
				<h1 id='title'>React Dynamic Table</h1>
				<div style={{
    				display: "flex",
    				justifyContent: "right",
   					 alignItems: "center",
  				}}>
				{this.state.show && <table id='employees'  >
					<tbody>
						<tr>{this.renderTableHeader()}</tr>
							{this.renderTableData()}
							
						
					</tbody>
				</table>
	          }
			  </div>
			   <div className="basebuttonstyle">
				<div className="buttons">
					<Button variant="contained" color="secondary" onClick={this.clearTableData}>
						Clear table data
		            </Button>
					<Button variant="contained" color="primary" onClick={this.clearTableData }>
						Add Data to table
		            </Button>

				</div>
				</div>
			</div>
			
	         
		</div>
		);
	}
}

export default Tableg;

//task to make an perform promise call , use callback , use async wait , use of axios .