import React, { Component } from 'react';

class Jumbotron extends Component {
    render() {
        return (
            <div>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-3">NYT Article Scrubber</h1>
                    <p className="lead">Search for and Annotate Articles of Inerest</p>
                </div>
                </div>
            </div>
        );
    }
}

export default Jumbotron;