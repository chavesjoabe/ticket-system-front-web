import { CheckCircle } from '@mui/icons-material';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import * as React from 'react';
import TicketCard from '../../components/Card/Card';
import SideBar from '../../components/Side-Bar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

function MainTemplate() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={7}>
                    <TopBar />
                    <TicketCard />
                </Grid>
                <Grid item xs={3}>
                    <Card variant='outlined' sx={{ marginTop: '80px' }}>
                        <CardContent>
                            <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                                Recent Activity
                            </Typography>
                            <Box display='flex' flexDirection='row'>
                                <CheckCircle />
                                <Typography sx={{ marginLeft: '5px' }} > Someone complete task</Typography>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
export default MainTemplate;
