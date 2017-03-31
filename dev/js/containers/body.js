import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

import Signup from '../containers/signup.js';
import Login from '../containers/login.js';


class Body extends Component{
	render(){
		console.log(this.props.showLogin.show);
		if(this.props.showLogin.show){
			return(
				<Login/>
			);
		}else{
			return(
				<Signup/>
			);
		}
		
	}
}

function mapStateToProps(state){
	return {
		showLogin:state.showLogin
	}
}

export default connect(mapStateToProps)(Body);





