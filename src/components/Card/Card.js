import { Card, CardContent, Chip, Typography } from '@mui/material';
import * as React from 'react';


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
                <Chip label='Urgent' color='error' sx={{ marginTop: '15px', marginRight: '10px' }} />
                <Chip label='#HL67890' sx={{ marginTop: '15px', marginRight: '10px' }} />
            </CardContent>
        </Card>
    )
}

export default TicketCard;