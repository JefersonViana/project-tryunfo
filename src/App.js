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
    };
    this.handleClickGeneric = this.handleClickGeneric.bind(this);
  }

  handleClickGeneric = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({
        cardTrunfo: target.checked,
      });
      return;
    }
    this.setState({
      [target.name]: target.value !== ' ' ? target.value : '',
    });
    if (target.value.length > 1 && target.type !== 'number') {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
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
    this.setState({
      cardArray: xablau,
    });
    if (hasTrunfo) {
      this.setState({
        hasTrunfo: false,
      });
    }
  };

  // handleFilter = ({ target }) => {
  //   this.setState({
  //     [target.name]: target.value !== ' ' ? target.value : '',
  //   });
  //   const { cardArray } = this.state;
  //   const newArray = cardArray.filter((card) => {
  //     const teste = card.cardName;
  //     return teste.includes(target.value);
  //   });
  // };
  handleFilter = ({ target }) => {
    const { cardArray } = this.state;
    this.setState({
      [target.name]: target.value !== ' ' ? target.value : '',
    });
    const newArray = cardArray.filter((card) => {
      const teste = card.cardName;
      return teste.includes(target.value);
    });
    this.setState({
      cardArray: [...newArray],
    });
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
        <div>
          <p>Filtar por nome</p>
          <label>
            <input
              data-testid="name-filter"
              type="text"
              name="filterName"
              value={ filterName }
              onChange={ this.handleFilter }
            />
          </label>
        </div>
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
              // onClick={ this.handleDelete }
              // passar o index do MAP
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

// const {
//   cardName,
//   cardDescription,
//   cardImage,
//   cardRare,
//   cardAttr1,
//   cardAttr2,
