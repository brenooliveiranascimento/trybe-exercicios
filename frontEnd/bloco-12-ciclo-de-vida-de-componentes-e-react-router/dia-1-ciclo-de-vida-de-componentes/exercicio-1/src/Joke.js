import React, { cloneElement } from 'react';

class Jokes extends React.Component {
  constructor() {
    super()
    this.state = {
      jokeObj: undefined,
      loading: false,
      storedJokes: [],
    }

    this.fetchJoke = this.fetchJoke.bind(this);
    this.addPiada = this.addPiada.bind(this);
    this.saveJoke = this.saveJoke.bind(this);
    this.getJokesInList = this.getJokesInList.bind(this)
    this.clearJokes = this.clearJokes.bind(this);
    this.deletAJoke = this.deletAJoke.bind(this);
  }

  async saveJoke() {
    await localStorage.setItem("itemList", JSON.stringify(this.state.storedJokes))
    console.log('salvou')
  }

    async fetchJoke()  {
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestJoke = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const jokeObj = await requestJoke.json();
    this.setState({
      jokeObj: jokeObj,
    })
  };

  componentDidMount() {
    this.fetchJoke();
    this.getJokesInList();
  };

  getJokesInList() {
    const getLocal = localStorage.getItem("itemList")
    const response = JSON.parse(getLocal)
    this.setState({
      storedJokes: response
    })
  };

  async addPiada() {
    this.setState({
      loading:true
    })
    const requestHeaders = { headers: { Accept: 'application/json' } }
    const requestJoke = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const jokeObj = await requestJoke.json();
    const cloneNowState = this.state.storedJokes;
    cloneNowState.push(jokeObj);
    this.setState({
      storedJokes: cloneNowState,
    })
    this.setState({
      loading:false
    })
    this.saveJoke();
  }

  clearJokes() {
    this.setState({
      storedJokes: []
    })
    this.saveJoke();
  }

  deletAJoke(event) {
    console.log(this.state.storedJokes);
    const item = event.target.innerText
    if(this.state.storedJokes.length === 1) {
      this.setState({
        storedJokes: []
      })
    localStorage.setItem("itemList", JSON.stringify([]))
      return
    }
    const filtedList = this.state.storedJokes.filter((piada) =>
      piada.joke !== item);
    this.setState({
      storedJokes: filtedList
    })
    localStorage.setItem("itemList", JSON.stringify(filtedList))
  }

  render() {
    const LoadingElement = <span>Loading...</span>
    return (
      <div>
        {this.state.storedJokes.map(({ id, joke }) => (<p onClick={this.deletAJoke} key={id}>{joke}</p>))}
        {
          this.state.loading ? (
            <p>
              Loading...
            </p>
          ) : (
            <div/>
          )
        }
        <button onClick={this.addPiada}>
          nova piada
        </button>
        <button onClick={this.clearJokes}>
          Clear jokes
        </button>
      </div>
    );
  }
}
export default Jokes;