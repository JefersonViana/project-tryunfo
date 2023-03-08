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
        cardTrunfo: cardTrunfo ? 'Super Trunfo' : false,
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
  // quando executar handleDelete, se

  // handleDelete = ({ target }) => {
  //   const alvo = target.parentNode.firstChild.firstChild.innerText;
  //   const { cardArray } = this.state;
  //   let position;
  //   cardArray.filter((object, index) => {
  //     position = index;
  //     return object.cardName === alvo;
  //   });
  //   cardArray.splice(position);
  //   console.log(target.parentNode);
  //   target.parentNode.remove();
  // };

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
        {cardArray.map((object, index) => (
          <div key={ object.cardName }>
            <Card
              cardName={ object.cardName }
              cardDescription={ object.cardDescription }
              cardAttr1={ object.cardAttr1 }
              cardAttr2={ object.cardAttr2 }
              cardAttr3={ object.cardAttr3 }
              cardImage={ object.cardImage }
              cardRare={ object.cardRare }
              cardTrunfo={ object.cardTrunfo }
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
//   cardAttr3,
// } = this.state;
// const array = [
//   cardName.length !== null,
//   cardDescription.length > 1,
//   cardImage.length > 1,
//   cardRare.length > 1,
// ];
// const enable = array.every((element) => element > 0);
// const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
// const number = 210;
// console.log(event);
// if (enable && sum < number) {
//   this.setState({
//     isSaveButtonDisabled: !enable,
//   });
// } else {
//   this.setState({
//     isSaveButtonDisabled: true,
//   });
// }
