import React, { Component } from 'react';
import Search from './Search.js'
import Table from './Table.js'
//import logo from './logo.svg';
import './App.css';

const PATH_BASE = 'http://my-json-server.typicode.com/asadise/book-api/db';
const PATH_SEARCH = '';
const PARAM_SEARCH = 'query=';
const DEFAULT_QUERY = '';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  onChangeSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    const searchTerm = this.state;
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(error => error);
  }

  onDismiss(id) {
    const isNot = item => item.id !== id;
    const upldatedResult = this.state.result.books.filter(isNot);
    /* const upldatedList = this.state.list.filter(function (listItem) {
      return listItem.id !== id;
    }); */
    /*this.setState({ result: Object.assign({}, this.state.result, { books: upldatedResult }) })
      const userNames = { firstname: 'Robin', lastname: 'Wieruch' }; const userAge = { age: 28 };
      const user = { ...userNames, ...userAge };
    */
    this.setState({ result: { ...this.state.result, books: upldatedResult } })
  }

  render() {
    let hi = 'سلام؛ به پروژه «هکر نیوز» در React خوش آمدید!';
    const { result, searchTerm } = this.state;
    return (
      <div className="App">
        <div className="page">
          <div className="intersection">
            <h2>{hi}</h2>
            <Search value={searchTerm} onChange={this.onChangeSearch} >جستجو...</Search>
            {result ? <Table list={result.books} pattern={searchTerm} onDismiss={this.onDismiss} /> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
