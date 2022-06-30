import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Olá mundo</h1>
        <Link to={'TaskList'}>Lista de tarefas</Link>
      </div>
    )
  }
}

export default Home