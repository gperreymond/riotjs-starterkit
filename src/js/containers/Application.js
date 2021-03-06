// react
import React, { Component, PropTypes } from 'react';
// packages
import logger from 'debug';
import connectToStores from 'alt-utils/lib/connectToStores';
// local
import abibaoTheme from './../../css/abibaoTheme.css';
import Header from './Header';
import SparkApplicationComponent from './../components/spark/Application';
import ApplicationStore from './../stores/ApplicationStore';
import ApplicationActions from './../actions/ApplicationActions';

const debug = logger('react:containers:application');

const styles = {
  Page: {
    width: '100%',
    height: '100%'
  }
};

class Application extends Component {

  static propTypes = {
    loading: PropTypes.bool,
    style: PropTypes.object,
    children: PropTypes.node
  }

  static defaultProps = {
    loading: true
  }

  static getStores() {
    return [ApplicationStore];
  }

  static getPropsFromStores() {
    return ApplicationStore.getState();
  }

  constructor(props) {
    debug('constructor');
    super(props);
  }

  componentDidMount() {
    debug('componentDidMount');
    ApplicationActions.setLoading(false);
  }

  componentDidUpdate() {
    debug('componentDidUpdate');
  }

  render() {
    return (
      <SparkApplicationComponent style={styles.Page} loading={this.props.loading}>
        <Header />
        {this.props.children}
      </SparkApplicationComponent>
    );
  }

}

export default connectToStores(Application);
