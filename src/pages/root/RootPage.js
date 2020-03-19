import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { handleApiError as handleApiErrorProps } from 'ducks/operators/settings';
import { setModal as setModalAction } from 'ducks/actions';
import { Input } from 'components/inputs/Input';
import { Button } from 'components/buttons/Button';
import cn from './RootPage.module.scss';

export class RootPage extends Component {
  static propTypes = {
    registerUser: PropTypes.func,
    setModal: PropTypes.func,
    handleApiError: PropTypes.func,
  };

  state = {
    email_address: '',
    email_valid: true,
    password_valid: true,
    confirm_password: '',
    password: '',
  };

  handleSubmit = async () => {
    const { handleApiError, registerUser } = this.props;
    const { email_address, email_valid, password_valid, password } = this.state;
    const data = {
      email_address,
      password,
      read_terms: false,
    };
    try {
      if (!email_valid) {
        throw Error('Email Address must be valid');
      }
      if (!password_valid) {
        throw Error('Confirm Password must match Password');
      }
      if (data.password.length < 5) {
        throw Error('Password must be at least 5 characters');
      }
      await registerUser(data);
    } catch (err) {
      handleApiError(err, data);
    }
  };

  render() {
    return (
      <div className={cn.page}>
        <p>dsjfhsdkjhf</p>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setModal: setModalAction,
  handleApiError: handleApiErrorProps,
};

export default connect(null, mapDispatchToProps)(RootPage);
