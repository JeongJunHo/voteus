import React, { Fragment, useContext } from 'react';
import VoteCard from './VoteCard';

import {
    CssBaseline,
    Typography,
    Container,
    Grid
} from '@material-ui/core'
// import {makeStyles} from '@material-ui/core/styles'

import CandidateContext from '../../context/CandidateContext';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

// const useStyles = makeStyles(theme => ({
//     center: {
//         justify: 'center'
//     }
// }))

const VoteGrid = props => {
    const candidateList = useContext(CandidateContext);
    // const classes = useStyles();

    return (
        <Fragment>
        <CssBaseline />
        <Container>
            <Typography component="div" style={{ height: '100vh', padding: '10px' }}>
                <Grid container>
                {
                    candidateList.map((candidate) => {
                        return (
                            <Grid item xs={6} key={candidate.id}>
                                <VoteCard name={candidate.name} party={candidate.party} />
                            </Grid>
                        )
                    })
                }
                </Grid>
            </Typography>
        </Container>
        </Fragment>
    );
}

export default VoteGrid;