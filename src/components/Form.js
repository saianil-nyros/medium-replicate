import React from 'react';
import  $ from 'jquery';
// import bootstarp from './bootstrap.css' ;
// import logo from './profile.png'
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { ButtonInput,Modal,Button } from 'react-bootstrap';
export default class Form extends React.Component{


	render(){

		return(
			<form method="post" id="first_form" action="/validate">
   
      <div class="container">
<div className='row'>
 <div className='col-lg-5'>
        <h2 className="mt-2">UserLogin</h2>

         <div className="form-group">
        <label for="username" className="mt-1">username</label>
<input type="text" name="username" id="username" required=""   placeholder="username" />
        </div>
        

       
        <div className="form-group">
        <label for="password">Password</label>
<input type="password" name="password" id="password"  required=""  placeholder="password" />
        </div>
       </div>
 </div>
        <div className="form-group">
    <input type="submit" value="Submit" className=" btn-primary button text-center"/>
        </div>
       
       </div>
    </form>



);
	}
}