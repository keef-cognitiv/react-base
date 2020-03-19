import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter } from 'react-router-dom';
import { PublicLayout } from 'layouts/PublicLayout';

class ConnectedPublicRoute extends PureComponent {
  static propTypes = {
    component: PropTypes.object,
    layout: PropTypes.any,
    location: PropTypes.object,
  };

  render() {
    const { component: Component, location, ...rest } = this.props;
    return (
      <Route
        key={location.pathname}
        {...rest}
        render={props => (
          <PublicLayout>
            <Component {...props} />
          </PublicLayout>
        )}
      />
    );
  }
}

export const PublicRoute = withRouter(ConnectedPublicRoute);
