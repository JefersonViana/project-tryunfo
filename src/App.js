import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardArray: [],
      filterName: '',
      raridadeFilter: 'todas',
    };
    this.handleClickGeneric = this.handleClickGeneric.bind(this);
  }

  handleClickGeneric = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({ cardTrunfo: target.checked });
      return;
    }
    this.setState({ [target.name]: target.value !== ' ' ? target.value : '' });
    if (target.value.length > 1 && target.type !== 'number') {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }
  };

  handleButton = () => {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      cardArray,
    } = this.state;
    this.setState({
      cardArray: [...cardArray, {
        cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo,
      }],
    });
    if (cardTrunfo) {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
        hasTrunfo: true,
      });
    } else {
      this.setState({
        cardName: '',
        cardDescription: '',
        cardAttr1: '0',
        cardAttr2: '0',
        cardAttr3: '0',
        cardImage: '',
        cardRare: 'normal',
        cardTrunfo: false,
      });
    }
  };

  handleDelete = (index) => {
    const { cardArray, hasTrunfo } = this.state;
    const xablau = cardArray.filter((_object, teste) => teste !== index);
    this.setState({ cardArray: xablau });
    if (hasTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  handleFilter = ({ target }) => {
    const { cardArray } = this.state;
    this.setState({ [target.name]: target.value !== ' ' ? target.value : '' });
    const newArray = cardArray.filter((card) => {
      const teste = card.cardName;
      return teste.includes(target.value);
    });
    this.setState({ cardArray: [...newArray] });
  };

  handleFilterRaridade = ({ target }) => {
    const todas = 'todas';
    const { cardArray } = this.state;
    this.setState({ [target.name]: todas });
    const newArray = cardArray.filter((card) => {
      const teste = card.cardRare;
      if (target.value !== 'raro') {
        return teste.includes(target.value);
      }
      return teste === 'raro';
    });
    this.setState({ cardArray: [...newArray] });
  };

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
      hasTrunfo,
      isSaveButtonDisabled,
      cardArray,
      filterName,
      raridadeFilter,
      check,
    } = this.state;
    return (
      <>
        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleClickGeneric }
          onSaveButtonClick={ this.handleButton }
        />
        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />
        <p>Filtar por nome</p>
        <label>
          <input
            disabled={ check }
            data-testid="name-filter"
            type="text"
            name="filterName"
            value={ filterName }
            onChange={ this.handleFilter }
          />
        </label>
        <p>Filtar por raridade</p>
        <label>
          <select
            disabled={ check }
            name="raridadeFilter"
            defaultValue={ raridadeFilter }
            data-testid="rare-filter"
            onChange={ this.handleFilterRaridade }
          >
            <option selected disabled>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
        </label>
        <label data-testid="trunfo-filter">
          Super Trunfo
          <input
            type="checkbox"
            onClick={ this.handleClick }
          />
        </label>
        {cardArray.map((obj, index) => (
          <div key={ obj.cardName }>
            <Card
              cardName={ obj.cardName }
              cardDescription={ obj.cardDescription }
              cardAttr1={ obj.cardAttr1 }
              cardAttr2={ obj.cardAttr2 }
              cardAttr3={ obj.cardAttr3 }
              cardImage={ obj.cardImage }
              cardRare={ obj.cardRare }
              cardTrunfo={ obj.cardTrunfo }
            />
            <button
              data-testid="delete-button"
              type="button"
              onClick={ () => this.handleDelete(index) }
            >
              Excluir
            </button>
          </div>
        ))}
      </>
    );
  }
}

export default App;
