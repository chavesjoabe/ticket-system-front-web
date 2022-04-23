import { Grid } from '@mui/material';
import * as React from 'react';
import SideBar from '../../components/Side-Bar/SideBar';
import TopBar from '../../components/TopBar/TopBar';

function MainTemplate() {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}>
                    <SideBar />
                </Grid>
                <Grid item xs={9}>
                    <TopBar />
                </Grid>
            </Grid>
        </>
    );
}
export default MainTemplate;
