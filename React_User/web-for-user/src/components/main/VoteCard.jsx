import React, { Fragment } from 'react';

import {
    Card,
    CardContent,
    Typography
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
  });

const VoteCard = props => {
    const classes = useStyles();
    console.log('list', props.candidate)
    return (
        <Fragment>
            <a href="#none">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                        기호
                        </Typography>
                        <Typography variant="h5" component="h2">
                        {/* {props.candidate} */}
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
                </Card>
            </a>
        </Fragment>
    )
}

export default VoteCard;