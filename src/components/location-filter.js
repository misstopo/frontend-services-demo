import React from 'react';

export default class LocationFilter extends React.Component {
  render () {
    return (
      <div className="form-group">
        <label className="mui--text-title control-label" for="location">Location</label>
        <div className="col-md-4">
          <select id="location" name="location" className="mui-select">
            <option value="downtown">Downtown</option>
            <option value="midtown">Midtown</option>
            <option value="heights">Heights</option>
            <option value="montrose">Montrose</option>
          </select>
        </div>
      </div>
    );
  }
}