import React from 'react';
import * as PropTypes from 'prop-types';
import cn from './RootPage.module.scss';

export const PokemonCell = ({ row }) => <p className={cn.cell}>{row.name}</p>;
PokemonCell.propTypes = {
  row: PropTypes.object,
};
export const PokemonUrlCell = ({ row }) => <p className={cn.cell}>{row.url}</p>;
PokemonUrlCell.propTypes = {
  row: PropTypes.object,
};
