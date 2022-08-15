import {   Button, Card, CardContent, Grid, Typography} from "@mui/material"
import { AssignmentTurnedIn, TurnedInNot } from "@mui/icons-material"
import {Checkbox} from '@mui/material';
import { useState } from "react";
import { Box } from "@mui/system";


export const ToDoView = () => {
    // const [checked, setChecked] = useState(true);

    // const handleChange = (event) => {
    //     setChecked(event.target.checked);
    // };
  return (
    <Grid 
        container
        spacing={0}
        direction='column'
        alignItems='center'
        justifyContent='center'
        sx={{
            minHeight:'calc(100vh - 110px)',
            backgroundColor: 'primary.main',
            borderRadius: 2,
            padding: 2
        }}
    >
        <Card sx={{margin:2}}>
            <CardContent>
                
        <Grid 
            container
            alignItems='center'
            justifyContent='center'
            component='div'
            direction='row'
            backgroundColor='boxtodo.main'
            borderRadius={2}
            padding={2}
            marginBottom={1}
        >
            <Grid item xs={1}>
                <Checkbox
                    color="released"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" color='white'>Title</Typography>  
                <Typography component='p' color='white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
            </Grid> 
            <Grid item xs={4} justifyContent='center'>
                <Typography variant="h4" color='white'>05/10/2022</Typography>
                <Button variant="contained" size="small">
                    Ver Tarea
                </Button>  
            </Grid> 
            <Grid item xs={1}>
                <AssignmentTurnedIn fontSize="large" color='pending' />
            </Grid> 
        </Grid>
            </CardContent>
        </Card>
        <Card sx={{margin:2}}>
            <CardContent>
                
        <Grid 
            container
            alignItems='center'
            justifyContent='center'
            component='div'
            direction='row'
            backgroundColor='boxtodo.main'
            borderRadius={2}
            padding={2}
        >
            <Grid item xs={1}>
                <Checkbox
                    color="released"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" color='white'>Title</Typography>  
                <Typography component='p' color='white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
            </Grid> 
            <Grid item xs={4} justifyContent='center'>
                <Typography variant="h4" color='white'>05/10/2022</Typography> 
                <Button variant="contained" size="small">
                    Ver Tarea
                </Button> 
            </Grid> 
            <Grid item xs={1}>
                <AssignmentTurnedIn fontSize="large" color='pending' />

            </Grid> 
        </Grid>
            </CardContent>
        </Card>
        <Card>
            <CardContent>
                
        <Grid 
            container
            alignItems='center'
            justifyContent='center'
            component='div'
            direction='row'
            backgroundColor='boxtodo.main'
            borderRadius={2}
            padding={2}
            marginBottom={1}
        >
            <Grid item xs={1}>
                <Checkbox
                    color="released"
                    inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
            </Grid>
            <Grid item xs={6}>
                <Typography variant="h4" color='white'>Title</Typography>  
                <Typography component='p' color='white' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
            </Grid> 
            <Grid item xs={4} justifyContent='center'>
                <Typography variant="h4" color='white'>05/10/2022</Typography>
                <Button variant="contained" size="small">
                    Ver Tarea
                </Button>   
            </Grid> 
            <Grid item xs={1}>
                <AssignmentTurnedIn fontSize="large" color='pending' />
            </Grid> 
        </Grid>
            </CardContent>
        </Card>
        
    </Grid>
  )
}
