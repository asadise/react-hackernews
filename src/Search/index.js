import React, { Component } from "react";

class Search extends Component {
    render() {
        const { value, onSubmit, onChange, children } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder={children} value={value} onChange={onChange} />
                    &nbsp;<button type="submit">{children}</button>
                </form>
                <br /><br /><br />
            </div>);
    }
}
export default Search;