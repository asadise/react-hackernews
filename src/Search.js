import React, { Component } from "react";

class Search extends Component {
    render() {
        const { value, onChange } = this.props;
        return (
            <div>
                <input type="text" placeholder="جستجو" value={value} onChange={onChange} />
                <br /><br /><br />
            </div>);
    }
}
export default Search;