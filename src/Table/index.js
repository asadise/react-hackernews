import React, { Component } from "react";

class Table extends Component {
    render() {
        const { page, list, onDismiss, fetchSearchTopStories } = this.props;
        return (
            <div>
                <div className="table">
                    {/*{this.state.list.filter(isSearched(this.state.searchTerm)).map((item, index) =>  */}
                    {list.map((item, index) =>
                        <div key={item.id} className="table-row">
                            <span style={{ width: '10%' }}>
                                <img width="30" alt="cover" src={item.image} />
                            </span>
                            <span style={{ width: '30%' }}>
                                {index}. <a Using target="_blank" rel="noopener noreferrer" href={item.url}>{item.title.split("-")[0]}</a>
                            </span>
                            <span style={{ width: '20%' }}>{item.title.split("-")[1]}</span>
                            <span style={{ width: '10%' }}> 4</span>
                            <span style={{ width: '10%' }}> 7</span>
                            <Button className="button-inline" onClick={() => onDismiss(item.id)}>حذف</Button>
                            <br /><br />
                        </div>
                    )}
                </div>
                <div class="interactions">
                    {(page === -1) ? <Button onClick={() => window.location.reload()}>بازگشت</Button> :
                        <Button onClick={() => fetchSearchTopStories('', page + 1)}>بارگزاری موارد بیشتر...</Button>}
                </div>
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