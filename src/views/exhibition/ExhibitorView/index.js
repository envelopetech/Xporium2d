import React, { useState } from 'react';
import ImageMapper from 'react-image-mapper';
import exhibitor from 'src/assets/images/exhibitor.jpg'
import { makeStyles } from '@material-ui/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    imgContainer: {
        margin: 'auto',
    }
}));

const MAP = {
    name: "lobby-map",
    areas: [
        { name: "Intro", shape: "rect", coords: [610, 320, 690, 365] },
        { name: "Products", shape: "rect", coords: [695, 320, 775, 365] },
        { name: "Media", shape: "rect", coords: [610, 370, 690, 415] },
        { name: "Brouchures", shape: "rect", coords: [695, 370, 775, 415] }
    ]
}

export default function ExhibitorView() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const [dialogtext, setDialogtext] = useState();

    const handleclick = (area) => {
        
        setOpen(true)
        if (area.name === "Intro") {            
            setDialogtext("Intro")
        }
        else if (area.name === "Products") {        
            setDialogtext("Products")
        }
        else if (area.name === "Media") {        
            setDialogtext("Media")
        }
        else {        
            setDialogtext("Brouchures")
        }
    }
    return (
        <React.Fragment>
            <div className={classes.imgContainer}>
                <ImageMapper src={exhibitor} width={1366} imgWidth={1366} map={MAP}
                    onClick={handleclick}
                />
            </div>
            <Dialog open={open} onClose={() => setOpen(false)}>
                <DialogContent>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="h4" gutterbottom>{dialogtext}</Typography>
                        </Grid>
                    </Grid>
                </DialogContent>
            </Dialog>
        </React.Fragment>


    )
}