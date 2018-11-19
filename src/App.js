import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header';
import './index.css';
import Singlestory from './components/Singlestory';
import Storiespage from './Storiespage';
import Politics from './components/Politics';
import Design from './components/Design';
import Header from './components/Header';
import Tech from './components/Tech';
import Health from './components/Health';
import New from './components/New';
import Culture from './components/Culture';
import Popular from './components/Popular';

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';
import  $ from 'jquery';
import { HashRouter, Route, Link, NavLink } from 'react-router-dom';

 class App extends React.Component{

state={
	stories_data:[],
	
	single_story:[],
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


		return(
<HashRouter>
<div class="container">
	<div class="row">
		<div class="col-lg-3 ">
			<div class="text-left"><big><b>Medium</b></big></div>
			</div>
				
			<div class="col-lg-9 text-right">
			
				<span class="m-2 "><small>Become a member</small></span>
				<span class="m-2 text-success signin">sign in</span>
				<button class="btn btn-outline-success btn-md">Get started</button>
			</div>
			
		</div>
		
  <nav class="navbar-fixed-top navbar-expand-lg  navbar-light mt-1 ">
  
  <ul class="navbar-nav">
    <li >
      <NavLink to="/home" class='navlink'>HOME</NavLink>
    </li>
    <li class='navlink' >
      <NavLink to="/newstories" class='navlink'>THE NEW NEW</NavLink>
    </li>
    <li>
      <NavLink to="/culture" class='navlink'>CULTURE</NavLink>
    </li>
    <li >
      <NavLink to="/tech" class='navlink'>TECH</NavLink>
    </li>
     <li >
      <NavLink to="/health" class='navlink'>HEALTH</NavLink>
    </li>
    
    
    
    <li >
      <NavLink to="/politics" class='navlink'>POLITICS</NavLink>
    </li>
    <li >
      <NavLink to="/design" class='navlink'>DESIGN</NavLink>
    </li>
    
    <li >
      <NavLink to="/popular" class='navlink'>POPULAR</NavLink>
    </li>
    
    <li >
     <NavLink to="/collections" class='navlink'>COLLECTIONS</NavLink>
    </li>
    
  </ul>
</nav>

<div class="row">


	</div>
<hr/>


	
	

	

		<div>
       
			
     
<Route exact path="/home"  component={Header}/>   
<Route exact path="/home"  component={Storiespage}/>
<Route exact path="/viewstory/:ID"  component={Singlestory}/>
<Route exact path="/politics"  component={Politics}/>
<Route exact path="/design"  component={Design}/>
<Route exact path="/collections"  component={Storiespage}/>
<Route exact path="/tech"  component={Tech}/>
<Route exact path="/health"  component={Health}/>
<Route exact path="/newstories"  component={New}/>
<Route exact path="/culture"  component={Culture}/>
<Route exact path="/popular"  component={Popular}/>
		</div>
	

</div>

		</HashRouter>
	



			)


			
	}
}


export default App;

