import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import {toggleLogin} from '../actions/action-toggle-login';

class Header extends Component{
	render(){
		return(
			 <AppBar title="EnterpriseName" showMenuIconButton={false} 
			 iconElementRight={<RaisedButton label={this.props.showLogin.show?"Signup":"Login"}/>} onRightIconButtonTouchTap={()=>this.props.toggleLogin()} style={{paddingRight:'90'}} /> 
		);
	}
}

function mapStateToProps(state){
	return {
		showLogin:state.showLogin
	}
}

function matchDispatchToProps(dispatch){
	return bindActionCreators({toggleLogin: toggleLogin},dispatch);
}


export default connect(mapStateToProps, matchDispatchToProps)(Header);





