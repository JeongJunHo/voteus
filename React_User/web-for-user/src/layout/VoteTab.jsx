import React from 'react';
import { Link } from 'react-router-dom';

const VoteTab = props => {
    // console.log(props.click, props.i)
    // let classes = 'tab_vote'
    // if (props.click === props.i) {
    //     classes = 'tab_vote on'
    // }
    // console.log(typeof props.click, typeof props.i, classes)
    return (
        <li key={props.i}>
            {/* { `/${this.props.name}` } */}
            {/* click: {props.click} i: {props.i} cnt: {props.cnt} */}
            <Link to={`/?vote=${props.i}`} className={ props.click === props.i ? 'tab_vote on' : 'tab_vote' }>{props.name}</Link>
        </li>
    )
}

export default VoteTab;