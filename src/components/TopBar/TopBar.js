import { Button, Divider, Typography } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('/TicketRegistration');
    };
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
                <Button variant="contained" onClick={handleOnClick}>
                    New Ticket
                </Button>
            </Box>
            <Divider />
        </>
    );
};

export default TopBar;
