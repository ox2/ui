import React from 'react';
import { storiesOf } from '@kadira/storybook';
import IconBar from './IconBar';
import { items } from '../../data/MenuItems';

const handleUpdate = (value) => console.log('🐳', value); // eslint-disable-line no-console

storiesOf('IconBar', module)
  .add('default', () => (
    <IconBar
      value="@ox2/button"
      items={items}
      onUpdate={handleUpdate}
    />
  ));
