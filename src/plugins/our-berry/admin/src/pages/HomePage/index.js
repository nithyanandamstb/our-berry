/*
 *
 * HomePage
 *
 */

import React, {useState} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Header from '../../components/Header/header'
import ProjectList from '../../components/Projects/project-list'

const HomePage = () => {
  const [search_value, setValue] = useState('');
  return (
    <div>
      <Header />
      <ProjectList search_value={""}/>
    </div>
  );
};

export default HomePage;
