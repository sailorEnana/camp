import React from 'react'
import './styles.css';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Grid } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
function index() {
    return (

        <div className="">
            <Grid 
            container
            spacing={3}>
                <Grid item xs={12}>
                    <h1 sx={{ mx: 'auto', width: 5000 }}>Bienvenido a Camp</h1>
                    <AccountCircleIcon color="secondary" sx={{ fontSize: 200 }} />
                </Grid>
                <Grid item xs={12}>
                    <TextField color="secondary" id="outlined-basic" size="medium" label="Usuario" variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <TextField  color="secondary" id="outlined-basic" type="password" label="Contraseña"  variant="standard" />
                </Grid>
                <Grid item xs={12}>
                    <Button color="secondary">Iniciar</Button>
                </Grid>
                
            </Grid>
        </div>
    );
}

export default index;
