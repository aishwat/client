import React, {Component} from 'react';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';
import * as Colors from 'material-ui/styles/colors';

class LandingPage extends Component{
	render(){
		return(
			<div style={{backgroundColor:Colors.grey200,height:'100vh'}} >
			<Header />
			<Body />
			<Footer />
			</div>
		);
	}
}
export default LandingPage;