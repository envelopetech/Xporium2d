import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
    makeStyles
} from '@material-ui/core';

import { useDispatch } from 'src/store';

import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
    root: {},
    name: {
        marginTop: theme.spacing(1)
    },
    avatar: {
        height: 100,
        width: 100
    }
}));

const ProfileDetails = ({ className, user, ...rest }) => {
    const dispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();


    

    const classes = useStyles();
    return (
        <React.Fragment>
            <Card
                className={clsx(classes.root, className)}
                {...rest}
            >
                <CardContent>
                    <Box
                        display="flex"
                        alignItems="center"
                        flexDirection="column"
                        textAlign="center"
                    >
                        <Typography
                            className={classes.name}
                            color="textPrimary"
                            gutterBottom
                            variant="h5"
                        >
                            Profile Photo
                        </Typography>
                        <Avatar
                            className={classes.avatar}
                            src="https://cdn.filestackcontent.com/vwmRBk3vQSyvoNULyKfa"
                        />
                    </Box>
                </CardContent>
                <CardActions>
                    <Button
                        fullWidth
                        variant="text"
                    >
                        Edit picture
                    </Button>
                </CardActions>
            </Card>

        </React.Fragment>


    );
};

ProfileDetails.propTypes = {
    className: PropTypes.string,
    user: PropTypes.object.isRequired
};

export default ProfileDetails;
