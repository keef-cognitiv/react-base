import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modals } from 'modals/Modals';
import { Loading } from 'components/loading/Loading';
import { Menu } from 'components/navigation/Menu';
import cn from './Layouts.module.scss';

export class ConnectedPublicLayout extends React.PureComponent {
  static propTypes = {
    children: PropTypes.object,
    settings: PropTypes.object,
  };

  render() {
    const { children } = this.props;
    const { loading } = this.props.settings;
    return (
      <div className={cn.publicContainer}>
        <Menu />
        <div className={cn.content}>{children}</div>
        <Modals />
        {loading && <Loading variant="dark" />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settings,
});

export const PublicLayout = connect(mapStateToProps)(ConnectedPublicLayout);
