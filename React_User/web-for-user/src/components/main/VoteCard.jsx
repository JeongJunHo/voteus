import React, { Fragment } from 'react';

import {
    Card,
    CardContent,
    Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    box: {
        margin: '10px',
        alignItems: 'center'
    }
  });

const VoteCard = props => {
    const classes = useStyles();
    // console.log('list', props.candidate)
    return (
        <Fragment>
            <div className={classes.box}>
                <Card className={classes.card}>
                    <a href="#none">
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {props.party}
                            </Typography>
                            <Typography variant="h5" component="h2">
                            {props.name}
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                            {/* adjective */}
                            </Typography>
                            <Typography variant="body2" component="p">
                            슬로건
                            <br />
                            가나다라
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                    </a>
                </Card>
            </div>
        </Fragment>
    )
}

export default VoteCard;