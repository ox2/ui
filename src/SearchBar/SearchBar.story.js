import React from 'react';
import { storiesOf } from '@kadira/storybook';
import SearchBar from './SearchBar';

const onSearchUpdate = (searchTerm) => console.log('🍇', searchTerm); // eslint-disable-line no-console

storiesOf('SearchBar', module)
  .add('default', () => (
    <SearchBar
      onChange={onSearchUpdate}
      placeholder={'Search this...'}
    />
  ));
