import React from 'react';
import ImageMapper from 'react-image-mapper';

import audi from 'src/assets/images/audi.jpg';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    }
}));

const MAP = {
    name: "lobby-map",
    areas: [
      { name: "Auditorium", shape: "rect", coords: [105,138,263,209], href: "/app/keynote"  },
      { name: "Resources", shape: "rect", coords: [364,288,499,368], href: "/app/resources"  },
      { name: "Exhibition", shape: "rect", coords: [621,299,869,364], href: "/app/exhibition"  },
      { name: "Networking", shape: "rect", coords: [1065,267,1212,327], href: "/app/networking"  },
   
    ]
  }

export default function KeynoteView() {
    const classes = useStyles();
    return (
        <div className={classes.imgContainer}>
            <ImageMapper src={audi} width={1366} imgWidth={1280} map={MAP}/>
        </div>
       
    )
}