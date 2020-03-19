import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Tooltip } from 'components/tooltip/Tooltip';
import cn from './Menu.module.scss';
const { PUBLIC_URL } = process.env;

export const Menu = React.memo(() => (
  <div className={cn.menuContainer}>
    <img className={cn.logo} src={`${PUBLIC_URL}/logo.svg`} alt="Cognitiv Logo" width={56} />
    <Link to="/" className={cn.iconWrapper}>
      <FontAwesomeIcon icon="dice-d6" />
      <Tooltip title="Dashboard" />
    </Link>
    <Link to="/sandbox" className={cn.iconWrapper}>
      <FontAwesomeIcon icon="stream" />
      <Tooltip title="Sandbox" />
    </Link>
    <Link to="/error" className={cn.iconWrapper}>
      <FontAwesomeIcon icon="star" />
      <Tooltip title="Error Page" />
    </Link>
    <Link to="/sandbox" className={cn.iconWrapper}>
      <FontAwesomeIcon icon="flag-checkered" />
      <Tooltip title="More Pages" />
    </Link>
    <Link to="/sandbox" className={cn.iconWrapper}>
      <FontAwesomeIcon icon="gamepad" />
      <Tooltip title="More Pages" />
    </Link>
    <div className={cn.flex} />
  </div>
));
