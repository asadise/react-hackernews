import React, { Component } from 'react';
import axios from 'axios'
import Search from '../Search'
import Table from '../Table'
import LoadingImage from '../resource/loading.gif'
import './index.css';

const PATH_BASE = 'http://my-json-server.typicode.com/asadise/book-api';
const PARAM_SEARCH = '/books';
const PARAM_PAGE = '_limit=2&_page=';

function isEmpty(obj) {
  return !obj || Object.keys(obj).length === 0;
}

class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      searchTerm: '',
      page: 1,
      error: null,
      isLoading: false,
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
    event.preventDefault();
  }

  fetchSearchTopStories(searchTerm = '', page = 1) {
    this.setState({ isLoading: true });
    const url = (searchTerm) ? `${PATH_BASE}${PARAM_SEARCH}/${searchTerm}` : `${PATH_BASE}${PARAM_SEARCH}?${PARAM_PAGE}` + page;
    axios(url)
      .then(result => this._isMounted && this.setSearchTopStories(result.data, searchTerm, page))
      .catch(error => this._isMounted && this.setState({ error }));
  }

  setSearchTopStories(result, searchTerm, page) {
    let oldResult = (this.state.result) ? this.state.result : [];
    if (searchTerm !== '') {
      oldResult = [];
      page = -1;
    }
    //if result is an object instead of array
    let resultArray = [];
    if (!isEmpty(result) && result.length === undefined)
      resultArray.push(result);
    else if (!isEmpty(result))
      resultArray = result;

    const upldatedResult = [...oldResult, ...resultArray];
    this.setState({ result: upldatedResult, searchTerm: searchTerm, page: page, isLoading: false })
  }

  onChangeSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  componentDidMount() {
    this._isMounted = true;
    this.fetchSearchTopStories();
  }

  onDismiss(id) {
    const isNot = item => item.id !== id;
    const upldatedResult = this.state.result.filter(isNot);
    /* const upldatedList = this.state.list.filter(function (listItem) {
      return listItem.id !== id;
    }); */
    /*this.setState({ result: Object.assign({}, this.state.result, { books: upldatedResult }) })
      const userNames = { firstname: 'Robin', lastname: 'Wieruch' }; const userAge = { age: 28 };
      const user = { ...userNames, ...userAge };
    */
    this.setState({ result: upldatedResult })
  }

  render() {
    let hi = 'سلام؛ به پروژه «هکر نیوز» در React خوش آمدید!';
    const { result, searchTerm, page, error, isLoading } = this.state;

    if (error)
      return <div className="App" style={{ textAlign: "center" }}><h3>خطایی در فراخوانی وب‌سرویس رخ داده است.</h3><span>جزئیات: {error.toString()}</span></div>

    return (
      <div className="App">
        <div className="page">
          <div className="intersection">
            <h2>{hi}</h2>
            <Search value={searchTerm} onChange={this.onChangeSearch} onSubmit={this.onSearchSubmit} >جستجو...</Search>
            {result ? <Table list={result} onDismiss={this.onDismiss} fetchSearchTopStories={this.fetchSearchTopStories} page={page} isLoading={isLoading} /> : null}
            {isLoading ? <Loading /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

const Loading = () =>
  <div style={{ textAlign: "center" }}>
    <img src={LoadingImage} alt="در حال بارگزاری؛ لطفا صبر کنید..." />
  </div>

export default App;
