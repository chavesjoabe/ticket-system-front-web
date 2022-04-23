import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const TopBar = () => {
    return (
        <>
            <Box
                widh="100%"
                height="80px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                justifyContent="space-between"
                paddingLeft="20px"
                paddingRight="20px"
            >
                <Typography variant="h5">Tickets</Typography>
                <Button variant="contained">New Ticket</Button>
            </Box>
            <Divider />
        </>
    );
};

export default TopBar;
