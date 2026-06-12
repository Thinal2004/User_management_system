import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';

function UserForm(props){

    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    return (
        <Grid 
            container 
            spacing={2}
            sx={{
                backgroundColor: '#f5f5f5',
                display: 'block',
                marginBottom: '20px'
            }}
        >

            <Grid item xs={12}>
                <Typography component="h2" gutterBottom> User Form </Typography>
            </Grid>

            <Grid item xs={12} sx={{display:'flex', marginBottom: '10px'}}>
                <Typography 
                       component="label"
                       htmlFor="id"
                       sx={{ display: 'block', color: '#000000', width: '100px' }}
                >
                    ID:
                </Typography>
                <input type="number" id="id" name="id" sx={{width: '400px'}} value={id} onChange={e => setId(e.target.value)} />
            </Grid>


            <Grid item xs={12} sx={{display:'flex'}}>
                <Typography 
                       component="label"
                       htmlFor="name"
                       sx={{ display: 'block', color: '#000000', width: '100px' }}
                >
                    Name:
                </Typography>
                <input type="text" id="name" name="name" sx={{width: '400px'}} value={name} onChange={e => setName(e.target.value)} />
            </Grid>

            <Button sx={{ color:'-moz-initial', backgroundColor: '#007bff', borderRadius: '4px', marginTop: '20px' }} variant="contained" onClick={() => {}}>
                Add
            </Button>

        </Grid>
    );
}

export default UserForm;