import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LoginForm from './login_form';
// import {selectUser} from '../actions/index';
class Login extends Component{
	submit(values) {
    // Do something with the form values
    console.log(values);
 	 }
	render(){
		return(
			 <LoginForm onSubmit={this.submit} />
		);
	}
}

function mapStateToProps(state){
	return {
		user:state.user
	}
}

export default connect(mapStateToProps)(Login);