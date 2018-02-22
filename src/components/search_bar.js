import React, { Component } from 'react';
/**
 * Equivalent to:
 * import React from 'react';
 * const Component = React.Component;
 */

/**
 * Could use: 
 * 
 * const SearchBar = () => {
 *  return <h2>Hello</h2>;
 * }
 * 
 * This is a functional component.  What we use below is a class based component.
 */

// Can use Component because we pulled it off in the import statement
class SearchBar extends Component {
    // Initializing state in class based component.  Functional components dont have state
    constructor(props) {
        // Calls the method on the parent Class of Component
        super(props);

        // Has all the properties that we want to keep state of
        // term is updated via the input and will be updated on each keystroke
        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
    }
    
    // All classes must have this render method
    render() {
        // event={this.methodName}
        // Create new input element that executes onInputChange for every change to input
        // https://reactjs.org/docs/events.html
        return (
            <div className="search-bar">
                <input 
                value={this.state.value}
                onChange={event => this.onInputChange(event.target.value)} />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({ term: term });
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar;