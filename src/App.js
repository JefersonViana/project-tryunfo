import React from 'react';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nameCard: '',
      textarea: '',
      atributo1: 0,
      atributo2: 0,
      atributo3: 0,
      linkSrc: '',
      select: 'normal',
      checkbox: false,
    };
    this.handleClickGeneric = this.handleClickGeneric.bind(this);
  }

  handleClickGeneric = ({ target }) => {
    if (target.type === 'checkbox') {
      this.setState({
        checkbox: target.checked,
      });
      return;
    }
    this.setState({
      [target.name]: target.value,
    });
  };

  render() {
    const {
      nameCard,
      textarea,
      atributo1,
      atributo2,
      atributo3,
      linkSrc,
      select,
      checkbox,
    } = this.state;
    return (
      <Form
        nameCard={ nameCard }
        callback={ this.handleClickGeneric }
        textarea={ textarea }
        atributo1={ Number(atributo1) }
        atributo2={ Number(atributo2) }
        atributo3={ Number(atributo3) }
        linkSrc={ linkSrc }
        select={ select }
        checkbox={ checkbox }
      />
    );
  }
}

export default App;
