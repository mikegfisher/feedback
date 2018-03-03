import React, { Component } from 'react';
import fire, { db } from '../fire';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        }
    }
    componentWillMount() {

    }
    render() {
        return (<div />);
    }
}
export default HomePage;
