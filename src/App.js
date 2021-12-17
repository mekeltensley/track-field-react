import React, { Component } from 'react';
import './App.css';

//Components 
import Roster from './Roster';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Roster 
                title="Women's Roster"
                name="Sha'Carri Richardson"
                type="100m Sprints"
                height="5'9"
                class="Junior"
                />
            </div>
        )
    }
}


export default App;
