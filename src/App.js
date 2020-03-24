import React, { Component } from 'react';
import Search from './Search.js'
import Table from './Table.js'
//import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'صد سال تنهایی',
    url: 'https://facebook.github.io/react/',
    author: 'گابریل مارکز',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'جنگ و صلح',
    url: 'https://github.com/reactjs/redux',
    author: 'تلستوی',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: list,
      searchTerm: '',
    }
    this.onDismiss = this.onDismiss.bind(this);
    this.onChangeSearch = this.onChangeSearch.bind(this);
  }

  onChangeSearch(event) {
    this.setState({ searchTerm: event.target.value });
  }

  onDismiss(id) {
    const isNot = item => item.objectID !== id;
    const upldatedList = this.state.list.filter(isNot);
    /* const upldatedList = this.state.list.filter(function (listItem) {
      return listItem.objectID !== id;
    }); */
    this.setState({ list: upldatedList })
  }

  render() {
    let hi = 'سلام به اپ ری‌اکت من خوش آمدید!';
    const { list, searchTerm } = this.state;

    return (
      <div className="App" dir="rtl">
        <h2>{hi}</h2>
        <Search value={searchTerm} onChange={this.onChangeSearch} />
        <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
      </div>
    );
  }
}

export default App;
