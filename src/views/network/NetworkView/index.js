import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    }
}));


export default function NetworkView() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h4" gutterbottom>Network</Typography>
        </React.Fragment>
    )
}