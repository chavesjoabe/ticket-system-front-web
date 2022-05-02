import * as React from 'react';
import { Card, CardContent, Chip, Typography, Box, Badge } from '@mui/material';
import { ChatBubbleOutline } from '@mui/icons-material';

const TicketCard = () => {
    return (
        <Card sx={{ minWidth: 275, marginTop: '20px' }}>
            <CardContent>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>
                    Format my device
                            </Typography>
                <Typography sx={{ marginTop: '15px', color: '#666666' }}>
                    Simple card description Simple card description Simple card description
                            </Typography >
                <Box display='flex' flexDirection='row' alignItems='center' marginTop='15px'>
                    <Chip label='Urgent' color='error' sx={{ marginRight: '10px' }} />
                    <Chip label='#HL67890' sx={{ marginRight: '10px' }} />
                    <Badge badgeContent={2} color='error'>
                        <ChatBubbleOutline />
                    </Badge>
                </Box>
            </CardContent>
        </Card>
    )
}

export default TicketCard;