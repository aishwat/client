import React, {Component} from 'react';
// import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// import {selectUser} from '../actions/index';
class UserDetail extends Component{
	render(){
		if(!this.props.user){
			return(<h4>Select a user...</h4>);
		}
		return(
			<div>
				<img src={this.props.user.thumbnail} />
				<h2>{this.props.user.first} {this.props.user.last} </h2>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		user:state.activeUser
	}
}

export default connect(mapStateToProps)(UserDetail);