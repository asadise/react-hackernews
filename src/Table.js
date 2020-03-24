import React, { Component } from "react";

function isSearched(searchTerm) {
    return item => item.title.toLowerCase().includes(searchTerm.toLowerCase());
}

class Table extends Component {
    render() {
        const { list, pattern, onDismiss } = this.props;
        return (
            <div className="items">
                {/*{this.state.list.filter(isSearched(this.state.searchTerm)).map((item, index) =>  */}
                {list.filter(isSearched(pattern)).map((item, index) =>
                    <div key={item.objectID}>
                        <span>
                            {index}.<a href={item.url}>{item.title}</a>
                        </span>
                        <span> {item.author}</span>
                        <span> {item.num_comments}</span>
                        <span> {item.points}</span>
                        <button onClick={() => onDismiss(item.objectID)} type="button">حذف</button>
                        <br /><br />
                    </div>
                )}
            </div>
        );
    }
}
export default Table;