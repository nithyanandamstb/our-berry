/*
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { BaseHeaderLayout, Box, Searchbar, SearchForm } from '@strapi/design-system';

const Header = () => {
  const [value, setValue] = useState('');
  return (
      <Box background="neutral100">
      <BaseHeaderLayout primaryAction={
        <SearchForm>
        <Searchbar name="searchbar" onClear={() => setValue('')} value={value} onChange={e => setValue(e.target.value)} clearLabel="Clearing the plugin search" placeholder="e.g: handh" size="m">
          Searching for a project
        </Searchbar>
      </SearchForm>
      } secondaryAction={""} title="Projects" subtitle="--" as="h2" />      
      </Box>
  );
};

export default Header;
