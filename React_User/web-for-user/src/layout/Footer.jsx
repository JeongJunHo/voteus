import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: '10px 0',
        borderTop: '1px solid #d9d9d9',
        fontSize: '12px',
        backgroundColor: '#f1f1f1',
        textAlign: 'center',
        color: '#888',

    }
}))

const Footer = props => {
    const classes = useStyles();

    return (
        <div className={classes.footer}>
            선거 인증 시스템
        </div>
    )
}

export default Footer;