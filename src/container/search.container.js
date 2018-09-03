import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Repo from '../component/repo.component';
import * as actionCreators from '../actions/index.js';

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
    this.renderRepo = this.renderRepo.bind(this);
  }

  handleSearchSubmit() {
    const { loadEvents, loadUser } = this.props.actions;
    const userId = this.searchInput.value;
    loadUser(userId);
    loadEvents(userId);
  }

  renderRepo(repo, index) {
    return (
      <div key={index}>
        <Repo key={repo.id} repo={repo} />
      </div>
    );
  }

  handleKeyDown = function (e, cb) {
    if (e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      cb();
    }
  };

  render() {
    const { user } = this.props;
   
    return (
      <div>
        <input
            ref={el => this.searchInput = el}
            onKeyDown={(e) => { this.handleKeyDown(e, this.handleSearchSubmit)}}
            type="text"
            defaultValue={user}
          />
          <button type="submit" onClick={this.handleSearchSubmit}>
            <i className="fa fa-search"></i>
          </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);