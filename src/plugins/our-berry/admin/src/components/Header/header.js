/*
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { BaseHeaderLayout, Box, Searchbar, SearchForm } from '@strapi/design-system';

const Header = (props) => {
  const [value, setValue] = useState('');
  if(value.length>1) {
    props.onSearch(value);
  } else {
    props.onSearch("All");
  }
  return (
      <Box background="neutral100">
      <BaseHeaderLayout primaryAction={
        <SearchForm>
        <Searchbar name="search_key" onClear={() => setValue('')} value={value} onChange={e => setValue(e.target.value)} clearLabel="Clearing the plugin search" placeholder="e.g: handh">
          Searching for a project
        </Searchbar>
      </SearchForm>
      } secondaryAction={""} title="Projects" subtitle="--" as="h2" />      
      </Box>
  );
};

export default Header;
