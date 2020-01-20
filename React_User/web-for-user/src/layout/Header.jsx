import React, { Fragment } from 'react';
// import VoteTab from './VoteTab';
import {
    makeStyles,
    Typography,
    AppBar,
    Toolbar,
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1,
        cursor: 'pointer'
    }
}));

const Header = props => {
    const classes = useStyles();
    
    return (
        <Fragment>
            <AppBar position="sticky">
                <div>
                    <Toolbar>
                        <Typography className={classes.title}>
                            투표해주세요
                        </Typography>
                    </Toolbar>
                </div>
                {/* <div>
                    <VoteTab />
                </div> */}
            </AppBar>
        </Fragment>
    )
}

export default Header;