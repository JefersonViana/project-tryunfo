import React from 'react';
import PropTypes from 'prop-types';

class Label extends React.Component {
  render() {
    const { trunfo, func } = this.props;
    return (
      <label>
        <input
          type="checkbox"
          name="cardTrunfo"
          defaultChecked={ trunfo }
          data-testid="trunfo-input"
          onClick={ func }
        />
      </label>
    );
  }
}

Label.propTypes = {
  trunfo: PropTypes.bool.isRequired,
  func: PropTypes.func.isRequired,
};

export default Label;
