import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      nameCard,
      callback,
      textarea,
      atributo1,
      atributo2,
      atributo3,
      linkSrc,
      select,
      checkbox,
    } = this.props;
    return (
      <div>
        <h1>Tryunfo</h1>
        <label>
          <input
            type="text"
            name="nameCard"
            data-testid="name-input"
            value={ nameCard }
            onChange={ callback }
          />
        </label>
        <label>
          <textarea
            data-testid="description-input"
            name="textarea"
            value={ textarea }
            onChange={ callback }
          />
        </label>
        <label>
          <input
            type="number"
            data-testid="attr1-input"
            name="atributo1"
            value={ atributo1 }
            onChange={ callback }
          />
        </label>
        <label>
          <input
            type="number"
            data-testid="attr2-input"
            name="atributo2"
            value={ atributo2 }
            onChange={ callback }
          />
        </label>
        <label>
          <input
            type="number"
            data-testid="attr3-input"
            name="atributo3"
            value={ atributo3 }
            onChange={ callback }
          />
        </label>
        <label>
          <input
            type="text"
            name="linkSrc"
            data-testid="image-input"
            value={ linkSrc }
            onChange={ callback }
          />
        </label>
        <label>
          <select
            data-testid="rare-input"
            name="select"
            value={ select }
            onChange={ callback }
          >
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox"
            defaultChecked={ checkbox }
            data-testid="trunfo-input"
            onClick={ callback }
          />
        </label>
        <button
          data-testid="save-button"
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  nameCard: PropTypes.string.isRequired,
  textarea: PropTypes.string.isRequired,
  atributo1: PropTypes.number.isRequired,
  atributo2: PropTypes.number.isRequired,
  atributo3: PropTypes.number.isRequired,
  linkSrc: PropTypes.string.isRequired,
  select: PropTypes.string.isRequired,
  checkbox: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default Form;
