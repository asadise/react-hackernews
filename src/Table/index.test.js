import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Table from '../Table';
//import Button from '../Table';

describe('Table', () => {
  const props = {
    list: [
      { id: 0, title: 'test1', url: 'https://test-url1.com', image: '1.jpg' },
      { id: 1, title: 'test2', url: 'https://test-url2.com', image: '2.jpg' },
    ], page: 1,
  };
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Table {...props} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(<Table {...props} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

/*describe('Button', () => {
  it('render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button>Give me More!</Button>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  test('has a valid snapshot', () => {
    const component = renderer.create(<Button>Give me More!</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
}); */