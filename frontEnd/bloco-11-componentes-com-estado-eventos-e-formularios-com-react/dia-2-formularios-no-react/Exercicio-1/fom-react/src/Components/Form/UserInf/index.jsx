import React, {Component} from 'react';

class UserInf extends Component {
  constructor() {
    super()

    this.updatInf = this.updatInf.bind(this);
  }
  checkFirstCharter({target}) {
    if(!isNaN(target.value[0])) {
      target.value = '';
    }
  }

  checkSpecialCaracter({target}) {
    target.value = target.value.replace(/[^a-z0-9]/gi,'');
  }

  updatInf({target}) {
   this.props.changeValue(target.value, target.name)
  }

  render() {
    const { changeName, values } = this.props;
    return (
      <section>
        <label htmlFor="name">Name</label>
        <input maxLength={40} required id='name' name='name' onChange={changeName} value={values.name}/>

        <label htmlFor="email">email</label>
        <input maxLength={50} required type={'email'} id='email' name='email' onChange={this.updatInf} value={values.email}/>

        <label htmlFor="cpf">cpf</label>
        <input maxLength={11} required type={'number'} id='cpf' name='cpf' onChange={this.updatInf} value={values.cpf}/>

        <label htmlFor="address">address</label>
        <input onBlur={this.checkSpecialCaracter} maxLength={400} required type={'address'} id='address' name='address' onChange={this.updatInf} value={values.address}/>

        <label htmlFor="city">city</label>
        <input onBlur={this.checkFirstCharter}  maxLength={50} required type={'city'} id='city' name='city' onChange={this.updatInf} value={values.city}/>

        <label htmlFor="email">email</label>
        <input maxLength={50} required type={'email'} id='email' name='email' onChange={this.updatInf} value={values.email}/>

      </section>
    )
  }
}

export default UserInf;