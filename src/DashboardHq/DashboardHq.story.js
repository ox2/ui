import React from 'react';
import { storiesOf } from '@storybook/react';
import DashboardHq from './DashboardHq';
import { items as menuItems } from '../../data/Menu';
import { items as appItems } from '../../data/Apps';
import Immutable from 'immutable';

const handler = value => console.log('🍇', value); // eslint-disable-line no-console

const appList = Immutable.List.of(...appItems);

storiesOf('DashboardHq', module).add('default', () =>
  <DashboardHq
    activeApp={'3nNKyP6h6pMMjAyTMK'}
    currentPath={'/'}
    menuItems={menuItems}
    onAppItemClick={handler}
    onMenuItemClick={handler}
    recentApps={appList}
  />,
);
