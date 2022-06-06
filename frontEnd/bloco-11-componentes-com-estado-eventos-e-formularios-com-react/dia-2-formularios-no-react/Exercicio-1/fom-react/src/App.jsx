import React from 'react';
import './App.css';
import LastJob from './Components/Form/LastJob';
import UserInf from './Components/Form/UserInf';
import UserPainel from './Components/UserPainel';

const INITIAL_STATE = {
  name: '',
  email: '',
  cpf: '',
  address: '',
  city: '',
  countryState: '',
  addressType: '',
  resume: '',
  role: '',
  roleDescription: '',
  formError: {},
  submitted: false,
}

class App extends React.Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;

    this.updateState = this.updateState.bind(this);
    this.convertUpperCase = this.convertUpperCase.bind(this);
  }

  convertUpperCase({target}) {
    this.updateState(target.value.toUpperCase(), target.name);
  }

  async updateState(value, name) {
    await this.setState((oldState) => ({
      [name]: value,
    }))
    console.log(this.state.email)
  };

  render() {
    return (
      <form>
        <fieldset>
          <UserInf values={this.state} changeName={this.convertUpperCase} changeValue={this.updateState}/>
        </fieldset>
        <fieldset>
          <LastJob/>
        </fieldset>
        <UserPainel dados={this.state}/>
      </form>
    )
  }
}

export default App;
