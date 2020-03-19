import React from 'react';
import * as PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars';
import classNames from 'classnames';
import { Checkbox } from '../checkbox/Checkbox';
import cn from './Select.module.scss';

export const SelectCheckbox = ({
  rows,
  select_title,
  selected,
  row_key,
  empty_text,
  extended,
  bulk,
  width,
  top,
  left,
  right,
  handleSelectMulti,
}) => (
  <Scrollbars
    className={classNames(cn.selectScroll, { [cn.selectBulk]: bulk })}
    autoHeight
    autoHeightMin={30}
    autoHeightMax={200}
    style={{ minWidth: width, left, right, top }}
  >
    <div className={cn.selectWrapper}>
      {select_title && <p className={cn.selectTitle}>{select_title}</p>}
      {rows.length > 0 &&
        rows.map(row => (
          <div key={row.uuid} className={cn.listContainer}>
            <Checkbox
              label={row[row_key]}
              toggleChecked={checked => handleSelectMulti(checked, row)}
              checked={selected.some(select => select[row_key] === row[row_key])}
            />
          </div>
        ))}

      {rows.length === 0 && <p className={cn.empty}>{empty_text}</p>}
      {extended.length > 0 && (
        <>
          <div className={cn.extendedBreak} />
          <div className={cn.extended}>
            {extended.map(ext => (
              <p key={ext.uuid} className={cn.item} role="presentation" onClick={() => handleSelectMulti(null, ext)}>
                {ext[row_key]}
              </p>
            ))}
          </div>
        </>
      )}
    </div>
  </Scrollbars>
);

SelectCheckbox.defaultProps = {
  rows: [],
  selected: [],
  extended: [],
  row_key: 'uuid',
  select_title: '',
  bulk: false,
  width: 'auto',
  top: 'auto',
  left: 0,
  right: 0,
  empty_text: 'Nothing returned',
  handleSelectMulti: () => {},
};
SelectCheckbox.propTypes = {
  rows: PropTypes.array,
  extended: PropTypes.array,
  selected: PropTypes.array,
  select_title: PropTypes.string,
  row_key: PropTypes.string,
  bulk: PropTypes.bool,
  width: PropTypes.any,
  top: PropTypes.any,
  left: PropTypes.any,
  right: PropTypes.any,
  empty_text: PropTypes.string,
  handleSelectMulti: PropTypes.func,
};
