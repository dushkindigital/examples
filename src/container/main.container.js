import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actionCreators from '../actions/index.js';
import SearchContainer from './search.container.js';
import ReposContainer from './repos.container.js';

class MainContainer extends Component {
  //constructor(props) {
  //  super(props);
  //}

  goTo(page) {
      this.props.actions.goTo(page);
  }

  render() {
    const { page } = this.props;
    switch (page) {
        case 'search':
            return (
            <div className="search-container">
                <img src={require('../img/Github_Logo.png')} alt='logo' />
                <SearchContainer />
            </div>
            );
        case 'repos':
            return  <ReposContainer />;
         default:
            return <SearchContainer />;
    }
  }
}

function mapStateToProps(state) {
  return {
    page: state.page,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);