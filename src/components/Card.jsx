import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      teste,
    } = this.props;
    return (
      <div>
        <p data-testid="name-card">{ cardName }</p>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <p data-testid="attr1-card">
          Attr01..................
          <span>{ cardAttr1 }</span>
        </p>
        <p data-testid="attr2-card">
          Attr02..................
          <span>{ cardAttr2 }</span>
        </p>
        <p data-testid="attr3-card">
          Attr03..................
          <span>{ cardAttr3 }</span>
        </p>
        <p data-testid="rare-card">{ cardRare }</p>
        { cardTrunfo ? <p data-testid="trunfo-card">{ teste }</p> : null}
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  teste: PropTypes.string.isRequired,
};

export default Card;
