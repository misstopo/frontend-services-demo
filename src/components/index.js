import Cards from './cards';
import Filters from './filters';
import { Link } from 'react-router';
import organizations from '../data/organizations';
import React from 'react';

export default class Index extends React.Component {
  render() {
    return (
      <div className="home mui-row">
        <Filters />
        <div className="mui-col-md-5">
          <Cards />
        </div>
        <div className="mui-col-md-3">
         <img className="dummy-map" src={"../img/dummy-map.jpg"} />
        </div>
      </div>
    );
  }
}