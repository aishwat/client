import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import SignupForm from './signup_form';
// import {selectUser} from '../actions/index';

class Signup extends Component{
	submit(values) {
    // Do something with the form values
    console.log(values);
 	 }
	render(){
		return(
			 <SignupForm onSubmit={this.submit}/>
		);
	}
}

function mapStateToProps(state){
	return {
		user:state.user
	}
}

export default connect(mapStateToProps)(Signup);