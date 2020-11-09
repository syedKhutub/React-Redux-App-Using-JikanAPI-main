import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from './card';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop: '50px'
    },

  }));

const CardRow = (props) => {
    const classes = useStyles();

    alert("rendered");
    
    const renderCards = () => {
        
            return (props.results.map((i,j) => (
                <Grid item xs={12} sm={6} spacing={3}>
                    <Card key={j} imageURL={i.image_url} imageTitle={i.title}/>
                </Grid>
            ))
        )

    }
    return (
        <div className={classes.root}>
        <Grid container 
              direction='row'
              justify="space-evenly"
              alignItems="center"
              >
            
                {renderCards()}
            

            <Button variant="contained" color="secondary" onClick={props.clicked}>
                Show More
            </Button >
         
        </Grid>

        
    </div>
    )
}

export default CardRow;