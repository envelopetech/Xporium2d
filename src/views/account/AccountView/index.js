import React, {useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Grid, makeStyles, Container } from '@material-ui/core';
import ProfileDetails from './ProfileDetails';
import GeneralSettings from './GeneralSettings';
import { useDispatch } from 'src/store';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      },
      banner: {
        backgroundColor: theme.palette.background.paper,
        paddingBottom: theme.spacing(2),
        paddingTop: theme.spacing(2),
        borderBottom: `1px solid ${theme.palette.divider}`
      },
      bannerChip: {
        marginRight: theme.spacing(2)
      },
      methodIcon: {
        height: 30,
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      },
      cardContainer: {
        paddingBottom: 80,
        paddingTop: 80,
      },
      cardContent: {
        padding: theme.spacing(4),
        display: 'flex',
        flexDirection: 'column',
        minHeight: 400
      },
      currentMethodIcon: {
        height: 40,
        '& > img': {
          width: 'auto',
          maxHeight: '100%'
        }
      }
}));



const General = () => {
  const classes = useStyles();
  

  return (
    <Container
    className={classes.cardContainer}
    maxWidth="md"
  >
    <Grid      
      container
      spacing={3}     
    >
      <Grid
        item
        lg={4}
        md={6}
        xl={3}
        xs={6}
      >
        <ProfileDetails />
      </Grid>
      <Grid
        item
        lg={8}
        md={6}
        xl={9}
        xs={6}
      >
        <GeneralSettings />
      </Grid>
    </Grid>
    </Container>
  );
}

General.propTypes = {
  className: PropTypes.string
};

export default General;
