import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Repo from '../component/repo.component';
import * as actionCreators from '../actions/index.js';
import SearchBar from '../component/search.component.js';

class SearchContainer extends Component 
{
  
  constructor(props) {
		super(props);
		this.state = {
			user: ""
		};
		this.handleSearchUpdate = this.handleSearchUpdate.bind(this);
		this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
	}

  handleSearchSubmit(e) {
      e.preventDefault();
      this.props.actions.loadUser(this.state.user);
  }

  handleSearchUpdate(e)
  {
    let user = e.target.value;
    return this.setState({ user: user });
  }

  repoRow(repo, index) {
    return (
      <div key={index}>
        <Repo key={repo.id} repo={repo} />
      </div>
    );
  }

  render() {
      return (
      <div>
        <SearchBar 
          handleSubmit={this.handleSearchSubmit}
          user={this.state.user} 
          handleChange={this.handleSearchUpdate}
        />
        
      </div>
      );
    }
}

function mapStateToProps(state){
  return {
		repos: state.repos,
		user: state.user
	};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);