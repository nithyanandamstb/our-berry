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
  const [search_value, setValue] = useState('All');
  console.log("log",search_value)
  return (
    <div>
      <Header onSearch={setValue}/>
      <ProjectList search={search_value}/>
    </div>
  );
};

export default HomePage;
