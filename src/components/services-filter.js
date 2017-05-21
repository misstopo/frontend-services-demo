import React from 'react';

export default class ServicesFilter extends React.Component {
  render () {
    return (
      <div className="form-group ">
        <label className="mui--text-title control-label" for="selectbasic">Select service</label>
        <div className="">
          <select id="services_select" name="service_select" className="mui-select">
            <option value="primary_care">Primary Care</option>
            <option value="womens_services">Womens Services</option>
            <option value="hiv_testing">HIV Testing</option>
            <option value="mental_health">Mental Health</option>
          </select>
        </div>
      </div>
    );
  }
}