 import React from 'react';
import  $ from 'jquery';
import Singlestory from './Singlestory'
import Storiespage from '../Storiespage'

import { HashRouter, Router, Route, Link, NavLink } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
       Button,Row, Col,Container, Nav, NavItem} from 'reactstrap';

export default class Header extends React.Component{

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
const data = this.state.stories_data.slice(6,8).map((item,index)=>
			<Row key={index}>

            <Col sm="4">
                <img src="first.jpeg" height="100px" width="100px"/>
              </Col>
              <Col sm="8"><b>Title</b>:<p>{item.title}</p>
              <p><b>category</b>{item.category}</p>
        <NavLink  to={"/viewstory/"+item._id}>viewstory</NavLink>
          </Col>
            </Row>


	);
const data1=this.state.stories_data.slice(8,9).map((item,index)=>

    <Row key={index}>

            <Col sm="4">
                <img src="first.jpeg" height="100px" width="100px"/>
              </Col>
              <Col sm="8"><b>Title</b>:<p>{item.title}</p>
              <p><b>category</b>{item.category}</p>
             <NavLink  to={"/viewstory/"+item._id}>viewstory</NavLink>
          </Col>
            </Row>
  )
const data2=this.state.stories_data.slice(9,10).map((item,index)=>

    <Row key={index}>

            <Col sm="4">
                <img src="first.jpeg" height="100px" width="100px"/>
              </Col>
              <Col sm="8"><b>Title</b>:<p>{item.title}</p>
              <p><b>category</b>{item.category}</p>
             <NavLink  to={"/viewstory/"+item._id}>viewstory</NavLink>
             </Col>
            </Row>
  )


		return(
<HashRouter>
<div class="container">
	
	
<div class="row">
	<Container>
        <Row>
          <Col sm="4">
           {data1}
          </Col>

          <Col sm="4">
          <Card>
            {data}
    </Card>
          </Col>

     <Col sm="4">
          <Card>
            {data2}
  </Card>
          </Col>
        </Row>
      </Container>

	</div>


<div>
    <Route exact path="/viewstory"  component={Singlestory}/>
    

</div>

	
    

</div>

		</HashRouter>

	



			)


			
	}
}
 