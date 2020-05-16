import React, { Component } from "react";

class Search extends Component {
    componentDidMount() {
        if (this.input)
            this.input.focus();
    }

    render() {
        const { value, onSubmit, onChange, children } = this.props;
        return (
            <div>
                <form onSubmit={onSubmit}>
                    <input type="text" placeholder={children} value={value} onChange={onChange} ref={(node) => { this.input = node; }} />
                    &nbsp;<button type="submit">{children}</button>
                </form>
                <br /><br /><br />
            </div>);
    }
}
export default Search;