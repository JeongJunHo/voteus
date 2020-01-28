import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    header: {
        position: 'fixed',
        top: '0px',
        width: '100%',
        padding: '10px 0',
        fontSize: '20px',
        backgroundColor: '#3d414c',
        textAlign: 'center',
        color: '#fff',
    }
}))

const Header = props => {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            투표
        </div>
    )
}

export default Header;