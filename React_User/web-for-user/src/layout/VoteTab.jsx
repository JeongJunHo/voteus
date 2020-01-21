import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VoteTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            click: 0
        }
    }

    render() {
        return (
            <li key={this.props.i}>
                {/* {this.props.first} {this.state.click} {this.props.i} */}
                {/* { `/${this.props.name}` } */}
                <Link to='/' className={ this.props.first === this.props.i ? 'tab_vote on' : 'tab_vote' }>{this.props.name}</Link>
            </li>
        )
    }
}

export default VoteTab;