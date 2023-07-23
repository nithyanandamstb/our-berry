/*
 *
 * HomePage
 *
 */

import React, {useState,useEffect} from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import { useLocation, useParams } from "react-router-dom"
import ProjectDetails from "../../components/Projects/project-detail"


const HomePage = (props) => {
  // GET URL PARAMS VALUES
  const { id } = useParams();
  useEffect(() => {
    return {};
  });
  return (
    <>
    {id &&
    <ProjectDetails project_id={id} />
    }
    </>
  );
};

export default HomePage;
