import React from "react";
import { Link } from 'react-router-dom';

class TasksList extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    console.log(this.props.name)
  }

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <Link to={'/'}>Voltar a home</Link>
      </div>
    )
  }
}

export default TasksList