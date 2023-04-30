import { Grid, Paper, Switch } from '@mui/material';
import React, { useState } from 'react';
  
export default function FullWidthGrid() {
    const [spacing, setSpacing] = useState(2)
  
    return (
        <div>
            <Switch onChange=
            {() => setSpacing(spacing => spacing === 2 ? 4 : 2)} />
            Spacing {spacing}px
            <div>
                <Grid container spacing={spacing}>
                    <Grid item>
                        <Paper sx={{ 
                            height: 140, 
                            width: 100, 
                            border: '2px solid black' 
                        }}></Paper>
                    </Grid>
                    <Grid item>
                        <Paper sx={{ 
                            height: 140, 
                            width: 100,
                             border: '2px solid black' 
                        }}></Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}