import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography'; 


const useStyles = makeStyles({
    root: {
        maxWidth: 245,
        marginBottom: 20
    },
    media:{
        height:'400px'
    }
})
const CardBody = (props) => {
    const classes = useStyles();
    return (
        <Card>
            <CardMedia
                className={classes.media}
                image={props.imageURL}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.imageTitle}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardBody;