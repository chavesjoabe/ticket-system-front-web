import { ConfirmationNumber, GridView, Keyboard } from '@mui/icons-material';
import {
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';

const SideBar = () => {
    return (
        <Box width="100%" height="100vh" borderRight={1} borderColor="#c4c4c4">
            <Box width='100%' display='flex' flexDirection='row' alignContent='center'>
                <Keyboard sx={{ marginTop: '5px' }} color='primary' />
                <Typography variant='h6' marginLeft='10px' paddingBottom="20px" sx={{ fontWeight: 'bold' }}> HelpDesk </Typography>
            </Box>

            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <GridView />
                        </ListItemIcon>
                        <ListItemText primary="Overview" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ConfirmationNumber />
                        </ListItemIcon>
                        <ListItemText primary="Tickets" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );
};

export default SideBar;
