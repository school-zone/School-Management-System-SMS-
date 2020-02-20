import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="container" >
                    <h1 className="display-3">XYZ Institute</h1>
                    <p>No 152, "G" Block, Hosakerehalli, Bangalore-560085</p>
                    <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p>
                </div>
            </div>
        );
    }
}

export default HelloWorld;