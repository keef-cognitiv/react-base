import React from 'react';
import { ApiError } from './ApiError';

// This can be a functional components but more often
// history and location is passed into modals as props
export class Modals extends React.PureComponent {
  render() {
    return (
      <>
        <ApiError />
      </>
    );
  }
}
