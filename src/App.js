import React, { Component } from 'react';
import Search from './Search.js'
import Table from './Table.js'
//import logo from './logo.svg';
import './App.css';

const list = [
  {
    title: 'عقاید یک دلقک',
    url: 'http://asadiweb.ir/%D8%B9%D9%82%D8%A7%DB%8C%D8%AF-%DB%8C%DA%A9-%D8%AF%D9%84%D9%82%DA%A9/',
    author: 'هاینریش بل',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'هزار و نهصد و هشتاد و چهار',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-1984-%D8%AC%D9%88%D8%B1%D8%AC-%D8%A7%D9%88%D8%B1%D9%88%D9%84/',
    author: 'جورج اورول',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'جنگ و صلح',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%AC%D9%86%DA%AF-%D8%B5%D9%84%D8%AD-%D8%AA%D9%88%D9%84%D8%B3%D8%AA%D9%88%DB%8C/',
    author: 'لئو تولستوی',
    num_comments: 3,
    points: 8,
    objectID: 2,
  },
  {
    title: 'زندگی در شرق مسلمان',
    url: 'http://asadiweb.ir/%D8%B2%D9%86%D8%AF%DA%AF%DB%8C-%D8%AF%D8%B1-%D8%B4%D8%B1%D9%82-%D9%85%D8%B3%D9%84%D9%85%D8%A7%D9%86/',
    author: 'پیر پونافیدن',
    num_comments: 3,
    points: 5,
    objectID: 3,
  },
  {
    title: 'مسخ',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%B1%D9%85%D8%A7%D9%86-%D9%85%D8%B3%D8%AE-%DA%A9%D8%A7%D9%81%DA%A9%D8%A7/',
    author: 'فرانتس کافکا',
    num_comments: 3,
    points: 4,
    objectID: 4,
  },
  {
    title: 'سالار مگس‌ها (ارباب مگس‌ها)',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%B3%D8%A7%D9%84%D8%A7%D8%B1-%D9%85%DA%AF%D8%B3-%D9%87%D8%A7-%D8%A7%D8%AB%D8%B1-%D9%88%DB%8C%D9%84%DB%8C%D8%A7%D9%85-%DA%AF%D9%84%D8%AF%DB%8C%D9%86%DA%AF/',
    author: 'ویلیام گلدینگ',
    num_comments: 3,
    points: 4,
    objectID: 5,
  },
  {
    title: 'پیرمرد و دریا',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%B1%D9%85%D8%A7%D9%86-%D9%BE%DB%8C%D8%B1%D9%85%D8%B1%D8%AF-%D9%88-%D8%AF%D8%B1%DB%8C%D8%A7-%D8%A7%D8%AB%D8%B1-%D8%A7%D8%B1%D9%86%D8%B3%D8%AA-%D9%87%D9%85%DB%8C%D9%86%DA%AF%D9%88%DB%8C/',
    author: 'ارنست همینگوی',
    num_comments: 3,
    points: 7,
    objectID: 6,
  },
  {
    title: 'کیمیاگر',
    url: 'http://asadiweb.ir/%D8%AE%D9%84%D8%A7%D8%B5%D9%87-%D8%B1%D9%85%D8%A7%D9%86-%DA%A9%DB%8C%D9%85%DB%8C%D8%A7%DA%AF%D8%B1-%D8%A7%D8%AB%D8%B1-%D9%BE%D8%A7%D8%A6%D9%88%D9%84%D9%88-%DA%A9%D9%88%D8%A6%D9%84%DB%8C%D9%88/',
    author: 'پائولو کوئلیو',
    num_comments: 3,
    points: 4,
    objectID: 7,
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
    let hi = 'سلام؛ به پروژه «هکر نیوز» در React خوش آمدید!';
    const { list, searchTerm } = this.state;

    return (
      <div className="App">
        <div className="page">
          <div className="intersection">
            <h2>{hi}</h2>
            <Search value={searchTerm} onChange={this.onChangeSearch} >جستجو...</Search>
            <Table list={list} pattern={searchTerm} onDismiss={this.onDismiss} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
