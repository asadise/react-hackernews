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
                    <div key={item.id} className="table-row">
                        <span style={{ width: '10%' }}>
                            <img width="30" alt="cover" src={item.image} />
                        </span>
                        <span style={{ width: '30%' }}>
                            {index}. <a href={item.url}>{item.title.split("-")[0]}</a>
                        </span>
                        <span style={{ width: '20%' }}>{item.title.split("-")[1]}</span>
                        <span style={{ width: '10%' }}> 4</span>
                        <span style={{ width: '10%' }}> 7</span>
                        <Button className="button-inline" onClick={() => onDismiss(item.id)}>حذف</Button>
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