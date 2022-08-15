import { Grid, Typography } from "@mui/material"
import {CheckBoxOutlineBlank} from '@mui/icons-material'

export const NothingSelectedView = () => {
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
            borderRadius: 2
        }}
    >
        <Grid item xs={12}>
            <CheckBoxOutlineBlank 
                sx={{ fontSize: 100, color: 'white'}}
            />
        </Grid>
        <Grid item xs={12}>
            <Typography color='white' variant="h5">
                Lista de Tareas vacia
            </Typography>
        </Grid>

    </Grid>
  )
}