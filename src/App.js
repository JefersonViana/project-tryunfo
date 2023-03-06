import React from 'react';
import Form from './components/Form';

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
      [target.name]: target.value,
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
    } = this.state;
    return (
      <Form
        cardName={ cardName }
        cardDescription={ cardDescription }
        cardAttr1={ cardAttr1 }
        cardAttr2={ cardAttr2 }
        cardAttr3={ cardAttr3 }
        cardImage={ cardImage }
        cardRare={ cardRare }
        cardTrunfo={ cardTrunfo }
        callback={ this.handleClickGeneric }
      />
    );
  }
}

export default App;
