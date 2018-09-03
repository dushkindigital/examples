import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Repo from '../component/repo.component';
import SearchContainer from './search.container';
import * as actionCreators from '../actions/index.js';
import Pagination from '../common/pagination' //may not be here

class ReposContainer extends Component {

  constructor(props) {
    super(props);

    //var repoItems = [...Array(150).keys()].map(i => ({ id: (i+1), name: 'Item ' + (i+1) }));

    this.state = {
      repoItems: this.props.repos.repos || [],
      pageOfItems: []
    };

    this.onChangePage = this.onChangePage.bind(this);
    this.renderRepo = this.renderRepo.bind(this);
    this.goHome = this.goHome.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ repoItems: nextProps.repos.repos });
  }

  onChangePage(pageOfItems) {
    // update state with new page of items
    this.setState({ pageOfItems: pageOfItems });
  }

  renderRepo(repo, index) {
    return (
      <div key={index}>
        <Repo key={repo.id} repo={repo} />
      </div>
    );
  }

  goHome() {
    this.props.actions.goTo('search');
  }

  renderRepos(data) {
    if (data.error) {
      return (
        <center>
          <br />
        <p>User doesn't exist</p>
        </center>
      )
    }
    if (!data.repos) {
      return null;
    }
    if (data.repos.length > 0) {
      return (
        <div className="">
          {this.state.pageOfItems.map(this.renderRepo)}
          <center>
            {/* this.state.repoItems.slice(0,30) */}
            <Pagination items={this.state.repoItems} onChangePage={this.onChangePage} />
          </center>
        </div>
      );
    }
    return (
      <center>
        <br />
        <p>User doesn't have any events</p>
      </center>
    );
  }

  render() {
    const { repos } = this.props;

    return (
      <div>
        <div className='repos-top'>
          <img src={require('../img/github-logo-sm.png')} alt='logo' />
          <SearchContainer />
        </div>
        <br />
        {this.renderRepos(repos)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ReposContainer);