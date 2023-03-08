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
      check: false,
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

  handleDelete = (indexMap) => {
    const { cardArray, hasTrunfo } = this.state;
    const arrayCards = cardArray.filter((_object, indexAtual) => indexAtual !== indexMap);
    this.setState({ cardArray: arrayCards });
    if (hasTrunfo) {
      this.setState({ hasTrunfo: false });
    }
  };

  handleFilter = ({ target }) => {
    const { cardArray } = this.state;
    this.setState({ [target.name]: target.value !== ' ' ? target.value : '' });
    const arrayName = cardArray.filter((card) => {
      const filterName = card.cardName;
      return filterName.includes(target.value);
    });
    this.setState({ cardArray: [...arrayName] });
  };

  handleFilterRaridade = ({ target }) => {
    const selected = 'todas';
    const { cardArray } = this.state;
    this.setState({ [target.name]: selected });
    const arrayClassificacao = cardArray.filter((card) => {
      const classificacao = card.cardRare;
      if (target.value !== 'raro') {
        return classificacao.includes(target.value);
      }
      return classificacao === 'raro';
    });
    this.setState({ cardArray: [...arrayClassificacao] });
  };

  handleClick = ({ target }) => {
    const { cardArray } = this.state;
    if (target.checked) {
      const trunfoCard = cardArray.filter((card) => card.cardTrunfo);
      this.setState({ check: true, cardArray: [...trunfoCard] });
    } else {
      this.setState({ check: false });
    }
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
        {cardArray.map((obj, indexMap) => (
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
              onClick={ () => this.handleDelete(indexMap) }
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
