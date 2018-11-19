import React from 'react';
import  $ from 'jquery';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { ButtonInput,Modal,Button,Panel } from 'react-bootstrap';
export default class Storiespage extends React.Component{

state={
	stories_data:[],
	
}
 


componentDidMount =()=>{

this.getData();

  	}


getData=(e)=>{
	
	$.ajax({
				url:'http://10.90.90.97:8000/get_data',
				method:'get',
				
				dataType:'json',
				success:function(res){
						console.log(res)
						if(res.status === 'success'){
							console.log('---------', res.user)
					       this.setState({stories_data:res.user});	

						}
						else{
							this.setState({stories_data:[]})
						}
				}.bind(this)
				,error:function(err){
					console.log('err');
				}

			});
}

render(){
<hr/>
	var data = this.state.stories_data.map((item,index)=>{
	return (

	<div className="container mt-4 text-center bg-dark text-light">
			<div class="row text-center ">
		
			<div class="col-lg-8 w-50 h-25 bg-dark text-light">
				
			
			<div className="card w-75 h-25 bg-dark text-light">
		    	<div className="card-header text-left">
				<p class="bg-dark text-light"><a href="#"> Title</a>:{item.title}</p>
				
			 	<p class="bg-dark text-light"><a href="#">Category</a>:{item.category}</p></div>
			 	<hr className='bg-light'/>
		    	<div className="card-body text-left">
		    	<p><a href="#">Description</a>:{item.description}</p>
				<p><a href="#">Content</a>:{item.content}</p>
				

				</div> 
		    	<div className="card-footer text-center">

		    	</div>

		  </div>


		</div>
				
			</div>
	
		  
		</div>
	)});
		


	return(

	<div className="container mt-5">
  	{data}

	</div>





  );

}

}