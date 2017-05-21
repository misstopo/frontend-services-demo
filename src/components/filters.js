import React from 'react';
import { Link } from 'react-router';
import EligibilityFilter from './eligibility-filter';
import LocationFilter from './location-filter';
import ServicesFilter from './services-filter';

export default class Filter extends React.Component {
  render() {
    return(
      <div className="filters mui-col-md-3">
        <ServicesFilter />
        <div className="mui-divider"></div>
        <EligibilityFilter />
        <div className="mui-divider"></div>
        <LocationFilter />
      </div>
    );
  }
}