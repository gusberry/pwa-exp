import React from 'react';
import { routeResolver } from './helpers';

class AsyncComponent extends React.Component {

  state = {
    component: null
  };

  componentWillMount() {
    routeResolver(this.props.componentName, this.onComponentLoaded);
  }

  onComponentLoaded = (component) => this.setState(() => ({ component }))

  render() {
    if (this.state.component) {
      const Route = this.state.component;

      return (
        <Route {...this.props} />
      );
    }

    return null;
  }
}

AsyncComponent.displayName = 'AsyncComponent';


export default AsyncComponent;

