import React, { Fragment, useContext } from 'react';
import VoteCard from './VoteCard';

import {
    CssBaseline,
    Typography,
    Container
} from '@material-ui/core'

import CandidateContext from '../../context/CandidateContext';

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// import Container from '@material-ui/core/Container';

const VoteGrid = props => {
    // state 만들어야 함
    const candidateList = useContext(CandidateContext);
    const candidate = candidateList.map((c) => (
        console.log(c.name)
    ))

    return (
        <Fragment>
        <CssBaseline />
        <Container>
            <Typography component="div" style={{ height: '100vh', padding: '10px' }}>
                {candidate}
                <VoteCard candidates={candidate}/>
            </Typography>
        </Container>
        </Fragment>
    );
}

export default VoteGrid;