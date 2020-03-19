import React, { Component } from 'react';
import * as PropTypes from 'prop-types';
import { DropdownContainer } from './DropdownContainer';
import { InputList } from '../inputs/InputList';
import { SelectCheckbox } from '../selects/SelectCheckbox';

export class DropdownCheckbox extends Component {
  static propTypes = {
    label: PropTypes.string,
    left_icon: PropTypes.any,
    right_icon: PropTypes.any,
    text_align: PropTypes.any,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    empty_text: PropTypes.string,
    rows: PropTypes.array,
    extended: PropTypes.array,
    selected: PropTypes.array,
    row_key: PropTypes.string,
    margin: PropTypes.string,
    width: PropTypes.string,
    select_title: PropTypes.string,
    background: PropTypes.string,
    bulk: PropTypes.bool,
    handleOnSelect: PropTypes.func,
  };

  static defaultProps = {
    label: '',
    placeholder: 'Select...',
    disabled: false,
    left_icon: '',
    right_icon: 'chevron-down',
    text_align: 'left',
    type: 'text',
    margin: '0px',
    background: 'transparent',
    width: '100%',
    bulk: false,
    rows: [],
    selected: [],
    extended: [],
    row_key: 'uuid',
    select_title: '',
    empty_text: 'Nothing returned',
    handleOnSelect: () => {},
  };

  state = {
    selected: [],
    rows: [],
  };

  componentDidMount() {
    const { selected, rows } = this.props;
    this.setState({ selected, rows });
  }

  handleOnMultiSelect = (checked, row) => {
    const { handleOnSelect } = this.props;
    const { selected } = this.state;
    if (!checked) {
      selected.splice(
        selected.findIndex(i => i.uuid === row.uuid),
        1,
      );
    }
    if (checked) {
      selected.push(row);
    }
    handleOnSelect(selected);
    this.setState({ selected });
  };

  render() {
    const {
      label,
      left_icon,
      right_icon,
      placeholder,
      disabled,
      type,
      width,
      text_align,
      background,
      margin,
      extended,
      select_title,
      row_key,
      empty_text,
      bulk,
    } = this.props;
    const { selected, rows, select_index } = this.state;
    return (
      <DropdownContainer
        handleOnMultiSelect={this.handleOnMultiSelect}
        disabled={disabled}
        bulk={bulk}
        margin={margin}
        width={width}
        background={background}
        input={{
          component: InputList,
          label,
          selected,
          row_key,
          text_align,
          placeholder,
          left_icon,
          right_icon,
          type,
        }}
        component={SelectCheckbox}
        select={{
          rows,
          selected,
          extended,
          select_index,
          select_title,
          row_key,
          empty_text,
          disabled,
        }}
      />
    );
  }
}
