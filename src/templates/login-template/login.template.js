import * as React from 'react'
import { Box, Grid, Typography, TextField, Card, CardContent, Button } from '@mui/material'

function LoginTemplate() {
    return (
        <Box width='100%' margin='0px' height='100vh' boxSizing='border-box'>
            <Grid container spacing={1} height='100%'>
                <Grid item xs={6}>
                    <Box backgroundColor='#2F69CC' height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Typography variant='h4' color='white'>
                            Here is a logo
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box height='100%' display='flex' flexDirection='column' alignItems='center' justifyContent='center'>
                        <Card sx={{ width: '80%' }}>
                            <CardContent>
                                <Typography variant='h4'>
                                    Login Form
                                </Typography>
                                <Typography>
                                    this is a sample of the text of login page
                                </Typography>
                                <TextField
                                    id="outlined-read-only-input"
                                    label="email"
                                    defaultValue='email'
                                    variant='outlined'
                                    sx={{ marginTop: '15px', width: '100%' }}
                                />
                                <TextField
                                    id="outlined-read-only-input"
                                    label="password"
                                    defaultValue="password"
                                    variant='outlined'
                                    sx={{ marginTop: '15px', width: '100%' }}
                                />
                                <Button variant='contained' size='large' sx={{ width: '100%', marginTop: '15px' }} >Login</Button>
                            </CardContent>
                        </Card>

                    </Box>
                </Grid>
            </Grid>
        </Box >
    )
}

export default LoginTemplate