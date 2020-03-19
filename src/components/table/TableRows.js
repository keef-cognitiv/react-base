import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import * as PropTypes from 'prop-types';
import { TableEmptyRow } from './TableEmptyRow';
import cn from './Table.module.scss';

export class WithRouterTableRows extends PureComponent {
  static propTypes = {
    callbacks: PropTypes.object,
    settings: PropTypes.object,
    headers: PropTypes.array,
    rows: PropTypes.any,
    states: PropTypes.array,
    platforms: PropTypes.array,
    location: PropTypes.object,
    frequency_list: PropTypes.array,
    row_component: PropTypes.any,
    cell_components: PropTypes.array,
  };

  static defaultProps = {
    states: [],
    platforms: [],
    frequency_list: [],
  };

  render() {
    const { headers, rows, settings, callbacks, row_component: Row, cell_components, location, ...rest } = this.props;
    if (rows.length > 0) {
      return (
        <div className={cn.tableRowWrapper}>
          {rows.map(row => (
            <Row
              key={row.uuid}
              headers={headers}
              row={row}
              settings={settings}
              callbacks={callbacks}
              cell_components={cell_components}
              paths={location.pathname.split('/')}
              {...rest}
            />
          ))}
        </div>
      );
    }
    return <TableEmptyRow headers={headers} settings={settings} />;
  }
}

export const TableRows = withRouter(WithRouterTableRows);
