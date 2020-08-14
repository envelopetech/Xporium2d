import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import ImageMapper from 'react-image-mapper';
import audi from 'src/assets/images/audi.jpg';
import Slide from '@material-ui/core/Slide';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    imgContainer: {
        margin: 'auto',
    },
    iframeContainer: {
        overflow: 'hidden',
        position: 'relative',
    },
    iframeContainer_iframe: {
        border: '0',
        height: '800px',
        left: '0',
        position: 'relative',
        top: '0',
        width: '100%',
    },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});
const MAP = {
    name: "lobby-map",
    areas: [
        { name: "Webinar", shape: "rect", coords: [896, 357, 449, 143] },

    ]
}


export default function KeynoteView() {
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={classes.imgContainer}>
                <ImageMapper src={audi} width={1366} imgWidth={1280} map={MAP} onClick={handleClickOpen} />
            </div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Demo Webinar
            </Typography>

                    </Toolbar>
                </AppBar>
                <div className={classes.iframeContainer}>
                    <iframe width="90%" className={classes.iframeContainer_iframe} src="https://www.bigmarker.com/xporium/Xporium-Demo?bmid=b0f384fa3336" allowfullscreen></iframe>
                </div>
            </Dialog>
        </div>
    );
}
