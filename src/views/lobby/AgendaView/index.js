import React from 'react';


import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    Divider,
    FormHelperText,
    Grid,
    Switch,
    TextField,
    Typography,
    Container,
    makeStyles,
    CardActions,
    Link
} from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
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

    agendaContainer: {
        marginTop: '1em',
    }
});

const MAP = {
    name: "lobby-map",
    areas: [
      { name: "Auditorium", shape: "rect", coords: [105,138,263,209], href: "/app/keynote"  },
      { name: "Resources", shape: "rect", coords: [364,288,499,368], href: "/app/resources"  },
      { name: "Exhibition", shape: "rect", coords: [621,299,869,364], href: "/app/exhibition"  },
      { name: "Networking", shape: "rect", coords: [1065,267,1212,327], href: "/app/networking"  },
   
    ]
  }

export default function AgendaView() {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Container className={classes.agendaContainer}>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                10:30 am - 11:00 am
    </Typography>
                <Typography variant="h5" component="h2">
                Welcome Address: Varun Jain, Special Correspondent, ETRetail.com
    </Typography>
                <Typography className={classes.pos} color="textSecondary">
                by Varun Jain
    </Typography>
                <Typography variant="body2" component="p">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      <br />
                    
                </Typography>
            </CardContent>
            <CardActions>
            <Link>
                <Button href="https://www.bigmarker.com/xporium/Webinar-13-August3-2020-08-13-03-15-pm?bmid=5bbdac0a0389" target="_blank" size="small" variant="contained" color="primary">Watch Now</Button></Link>
            </CardActions>
        </Card>
    </Container>
       
    )
}