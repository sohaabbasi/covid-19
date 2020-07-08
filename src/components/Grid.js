import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function SimpleGrid() {
  
  const[latest,setLatest]=useState("")
  
 useEffect(() =>{
     async function FetchData(){
        const response= await fetch('https://api.thevirustracker.com/free-api?global=stats')
        let data=  await response.json();
        setLatest(data.results[0])
        console.log(data.results[0])


     }
     FetchData();
 },[])
 const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
       
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              TOTAL CASES
                <h1>{latest.total_cases} </h1>
              </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              DEATHS
              <h1>{latest.total_deaths}</h1>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
              RECOVERED
              <h1>{latest.total_recovered}</h1>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
               Unresolved
              <h1>{latest.total_unresolved}</h1>
          </Paper>
        </Grid>
       
      </Grid>
    </div>
  );
}