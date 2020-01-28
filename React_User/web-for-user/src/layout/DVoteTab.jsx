import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

// const useStyles = makeStyles(theme => ({
//     space: {
//         marginTop: '48px',
//     }
// }))

const VoteTab = props => {
    // const classes = useStyles();
    // console.log(props.click, props.i)
    // let classes = 'tab_vote'
    // if (props.click === props.i) {
    //     classes = 'tab_vote on'
    // }
    // console.log(typeof props.click, typeof props.i, classes)
    return (
        <div>
            <li key={props.i}>
                {/* { `/${this.props.name}` } */}
                {/* click: {props.click} i: {props.i} cnt: {props.cnt} */}
                <Link to={`/?vote=${props.i}`} className={ props.click === props.i ? 'tab_vote on' : 'tab_vote' }>{props.name}</Link>
            </li>
        </div>
    )
}

export default VoteTab;