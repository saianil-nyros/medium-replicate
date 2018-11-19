import React, { Component } from 'react';
import  $ from 'jquery';

import Header from './Header'
import { HashRouter,  Router, Route, Link, NavLink } from 'react-router-dom';
import { ButtonInput,Modal,Button,Panel } from 'react-bootstrap';

const baseUrl = 'http://10.90.90.97:8000/';

export default class Singlestory extends Component{
constructor(props){
		super(props);
		this.state={
			stories_data:'',
			id: this.props.match.params.ID ? this.props.match.params.ID : '',
		}
		this.getStories = this.getStories.bind(this);
}


	componentDidMount =()=>{
		this.getStories();
	}
	getStories=(e)=>{
	var id = this.props.match.params.ID;
	var data ={from:'web',story_id: id,};
	$.ajax({
				url:baseUrl+'Singlestory',
				method:'post',
				data: data,
				dataType:'json',
				success:function(res){
						console.log(res)
						if(res.status === 200){
					       this.setState({stories_data:res.data});	
							console.log('---------', this.state.stories_data);

						}
						else{
							this.setState({stories_data:[]})
						}
				}.bind(this),
				error:function(err){
					console.log('err');
				}
 
			});
}




render(){

	return(


	<div className="container mt-4">
		
		 <div className="card w-75 h-25">
	    	<div className="card-header text-left">
			<p><a href="#">Title</a>:{this.state.stories_data.title}:</p>
		 	<p><a href="#">Category</a>:{this.state.stories_data.category}:</p></div>
	    	<div className="card-body text-left">
	    	<p><a  href="#">Description:</a>:{this.state.stories_data.description}</p>
			<p><a href="Singlestory">Content</a></p>
			{this.state.stories_data.content}
		</div> 
	 
	    	<div className="card-footer text-center">

	    	</div>
	  </div> 
	  
	</div>

);

}

}