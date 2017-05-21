import React from 'react';

export default class EligibilityFilter extends React.Component {
  render () {
    return (
      <div className="eligibility-filters form-group">
        <label className="mui--text-title ontrol-label" for="Eligibility">Eligibility</label>
        <div className="">
          <div className="pure-checkbox">
            <input name="Eligibility" id="Eligibility-0" value="criminal_history" type="checkbox" />
            <label for="Eligibility-0">
              Criminal history
            </label>
          </div>
          <div className="pure-checkbox">
            <input name="Eligibility" id="Eligibility-1" value="commercial_sex_industry" type="checkbox" />
            <label for="Eligibility-1">
              Commercial Sex Industry
            </label>
          </div>
          <div className="pure-checkbox">
            <input name="Eligibility" id="Eligibility-2" value="lgbtq" type="checkbox" />
            <label for="Eligibility-2">
              LGBTQ
            </label>
          </div>
          <div className="pure-checkbox">
            <input name="Eligibility" id="Eligibility-3" value="hiv_aids" type="checkbox" />
            <label for="Eligibility-3">
              HIV / AIDS
            </label>
          </div>
        </div>
      </div>
    );
  }
}