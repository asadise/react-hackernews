import React, { Component } from "react";

function isSearched(searchTerm) {
    return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;
        return (
            <div className="table">
                {/*{this.state.list.filter(isSearched(this.state.searchTerm)).map((item, index) =>  */}
                {list.filter(isSearched(pattern)).map((item, index) =>
                    <div key={item.objectID} className="table-row">
                        <span style={{ width: '40%' }}>
                            {index}. <a href={item.url}>{item.title}</a>
                        </span>
                        <span style={{ width: '30%' }}> {item.author}</span>
                        <span style={{ width: '10%' }}> {item.num_comments}</span>
                        <span style={{ width: '10%' }}> {item.points}</span>
                        <Button className="button-inline" onClick={() => onDismiss(item.objectID)}>حذف</Button>
                        <br /><br />
                    </div>
                )}
            </div>
        );
    }
}

/*class Button extends Component {
    render() {
        const { onClick, className = '', children } = this.props;
        return (<button onClick={onClick} className={className} type="button">{children}</button>);
    }
}*/
const Button = ({ onClick, className = '', children }) => <button onClick={onClick} className={className} type="button">{children}</button>;


export default Table;