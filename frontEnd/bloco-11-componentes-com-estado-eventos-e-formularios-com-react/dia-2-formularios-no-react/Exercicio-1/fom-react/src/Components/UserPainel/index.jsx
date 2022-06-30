import React from 'react';

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

class UserPainel extends React.Component {
  constructor() {
    super()
    this.state = INITIAL_STATE;

    this.setData = this.setData.bind(this);
  }

  setData(data) {
    console.log(data)
    this.setState((oldState) => ({
      name: data.name,
      email: data.email,
      cpf: data.cpf,
      address: data.address,
      city: data.city,
      countryState: data.countryState,
      addressType: data.addressType,
      resume: data.resume,
    }))
  }

  render() {
    return (
      <div>
        <p onClick={() => this.setData({email:'breno'})}>{this.state.name}</p>
        <p>{this.state.email}</p>
        <p>{this.state.cpf}</p>
        <p>{this.state.countryState}</p>
        <p>{this.state.addressType}</p>
        <p>{this.state.resume}</p>

        <button onClick={() => this.setData(this.props.dados)}>Enviar</button>
      </div>
    )
  }
}

export default UserPainel;