import React, { useContext } from 'react';
import { Typography, Grid, Box, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { green } from '@material-ui/core/colors';

import VoteContext from '../context/VoteContext';

const useStyles = makeStyles(theme => ({
    root: {
        '& > *': {
        margin: theme.spacing(1),
        },
    },
    rounded: {
        color: '#fff',
        backgroundColor: green[500],
        fontSize: '10px'
    },
    space: {
        margin: '10px'
    }
  }));

const Select = props => {
    const classes = useStyles();
    const votelist = useContext(VoteContext);

    return (
        <div className={classes.root}>
            <Typography variant="h5" component="h2">
                <Grid container spacing={3}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={3}>
                        <Box display="flex" alignContent="center" justifyContent="center">
                            <Button variant="contained" color="primary">
                                완료
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Typography>
        </div>
    )
}

export default Select;