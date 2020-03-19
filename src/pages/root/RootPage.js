import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPokemon as getPokemonProps } from 'ducks/operators/pokemon';
import { handleApiError as handleApiErrorProps } from 'ducks/operators/settings';
import { setModal as setModalAction, setLoading as setLoadingAction } from 'ducks/actions';
import { Input } from 'components/inputs/Input';
import { InputCurrency } from 'components/inputs/InputCurrency';
import { InputNumber } from 'components/inputs/InputNumber';
import { InputPercent } from 'components/inputs/InputPercent';
import { Dropdown } from 'components/dropdowns/Dropdown';
import { DropdownCheckbox } from 'components/dropdowns/DropdownCheckbox';
import { Button } from 'components/buttons/Button';
import { Table } from 'components/table/Table';
import { v1 as uuid } from 'uuid';
import { PokemonCell, PokemonUrlCell } from './PokemonCells';
import cn from './RootPage.module.scss';

export class RootPage extends Component {
  static propTypes = {
    pokemon: PropTypes.array,
    setLoading: PropTypes.func,
    getPokemon: PropTypes.func,
    handleApiError: PropTypes.func,
  };

  state = {
    input_base: '',
    input_currency: '',
    input_number: '',
    input_percent: '',
    dropdown_value: '',
    rows: [
      {
        country: 'Mexico',
        country_id: 1,
        uuid: 1,
      },
      {
        country: 'Canada',
        country_id: 2,
        uuid: 2,
      },
      {
        country: 'USA',
        country_id: 3,
        uuid: 3,
      },
    ],
    selected: [
      {
        country: 'USA',
        country_id: 3,
        uuid: 3,
      },
    ],
    headers: [
      {
        title: 'Pokemon',
        show: true,
        min_width: '150px',
        uuid: uuid(),
      },
      {
        title: 'URL',
        show: true,
        flex_grow: 1,
        min_width: '250px',
        uuid: uuid(),
      },
    ],
    settings: {
      pagination: 25,
    },
  };

  componentDidMount() {
    this.handleInitialState();
  }

  handleInitialState = async () => {
    const { setLoading, getPokemon, handleApiError } = this.props;
    try {
      await getPokemon();
    } catch (err) {
      handleApiError(err);
    }
    setLoading(false);
  };

  handleErrorApi = async () => {
    const { handleApiError } = this.props;
    try {
      throw new Error('This can handle API errors if you catch the error with handleApiError');
    } catch (err) {
      handleApiError(err);
    }
  };

  handleInputBase = input => {
    this.setState({ input_base: input.value });
  };

  handleInputCurrency = input => {
    this.setState({ input_currency: input.value });
  };

  handleInputNumber = input => {
    this.setState({ input_number: input.value });
  };

  handleInputPercent = input => {
    this.setState({ input_percent: input.value });
  };

  handleDropdown = item => {
    this.setState({
      dropdown_value: item.country,
    });
  };

  handleDropdownCheckbox = items => {
    this.setState({
      selected: items,
    });
  };

  render() {
    const {
      headers,
      rows,
      settings,
      selected,
      dropdown_value,
      input_base,
      input_currency,
      input_number,
      input_percent,
    } = this.state;
    const { pokemon } = this.props;
    return (
      <div className={cn.page}>
        <div className={cn.left}>
          <Input label="Input Base" value={input_base} handleOnChange={this.handleInputBase} />
          <Input
            label="Input Currency"
            value={input_currency}
            component={InputCurrency}
            margin="10px 0px 0px 0px"
            handleOnChange={this.handleInputCurrency}
          />
          <Input
            label="Input Number"
            value={input_number}
            component={InputNumber}
            margin="10px 0px 0px 0px"
            handleOnChange={this.handleInputNumber}
          />
          <Input
            label="Input Percent"
            value={input_percent}
            component={InputPercent}
            margin="10px 0px 0px 0px"
            handleOnChange={this.handleInputPercent}
          />
          <Dropdown
            label="Dropdown"
            rows={rows}
            value={dropdown_value}
            row_key="country"
            margin="10px 0px 0px 0px"
            handleOnSelect={this.handleDropdown}
          />
          <DropdownCheckbox
            label="Dropdown Checkbox"
            rows={rows}
            selected={selected}
            row_key="country"
            checked_key="uuid"
            margin="10px 0px 0px 0px"
            handleOnSelect={this.handleDropdownCheckbox}
          />
          <div className={cn.flex} />
          <Button margin="10px 0px 0px 0px" onClick={this.handleErrorApi}>
            Open Modal
          </Button>
        </div>
        <div className={cn.right}>
          <Table rows={pokemon} headers={headers} settings={settings} cell_components={[PokemonCell, PokemonUrlCell]} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  pokemon: state.pokemon,
});

const mapDispatchToProps = {
  setModal: setModalAction,
  setLoading: setLoadingAction,
  getPokemon: getPokemonProps,
  handleApiError: handleApiErrorProps,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootPage);
