import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

    constructor() {
        super();
        this.state = {
            monsters: [],
            searchField: ''
        };
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ monsters: users }));
    }
    render() {
        return ( <
            div className = "App" >
            <
            input type = 'text'
            placeholder = 'search monsters...'
            onChange = { event => this.setState({ searchField: event.target.value }) }
            / > <
            CardList monsters = { this.state.monsters } > {} < /CardList>   < /
            div > );
    }
}

export default App;