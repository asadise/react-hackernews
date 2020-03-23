import React, { Component } from 'react';
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

function isSearched(searchTerm) {
  return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

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
      <div className="App">
        <h2 dir="rtl">{hi}</h2>
        <input type="text" placeholder="جستجو" value={searchTerm} onChange={this.onChangeSearch} />
        <br /><br /><br />

        {/* {this.state.list.filter(isSearched(this.state.searchTerm)).map((item, index) => */}
        {list.filter(isSearched(searchTerm)).map((item, index) =>
          <div dir="rtl" key={item.objectID}>
            <span>
              {index}.<a href={item.url}>{item.title}</a>
            </span>
            <span> {item.author}</span>
            <span> {item.num_comments}</span>
            <span> {item.points}</span>
            <button onClick={() => this.onDismiss(item.objectID)} type="button">حذف</button>
            <br /><br />
          </div>
        )}
      </div>
    );
  }
}

export default App;
