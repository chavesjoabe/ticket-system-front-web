import {
    Box,
    Button,
    Card,
    CardContent,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from '@mui/material';
import * as React from 'react';
import { useState } from 'react';

const ticketTypes = ['Routine', 'Complaint', 'Performance', 'Issue', 'Other'];
const situationTypes = ['Urgent', 'Normal'];

function TicketRegistration() {
    const [type, setType] = useState('');
    const [situation, setSituation] = useState('');
    const handleOnChangeType = (event) => {
        setType(event.target.value);
    };

    const handleOnChangeSituation = (event) => {
        setSituation(event.target.value);
    };

    return (
        <Box
            width="100%"
            margin="0px"
            height="100vh"
            boxSizing="border-box"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            <Card sx={{ width: '80%' }}>
                <CardContent>
                    <Typography variant="h4">New Ticket</Typography>
                    <Box marginTop="25px">
                        <Grid container spacing={1}>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Type
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={type}
                                        label="Type"
                                        onChange={handleOnChangeType}
                                    >
                                        {ticketTypes.map((ticketType) => (
                                            <MenuItem
                                                value={ticketType}
                                                key={ticketType}
                                            >
                                                {ticketType}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">
                                        Situation
                                    </InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={situation}
                                        label="Age"
                                        onChange={handleOnChangeSituation}
                                    >
                                        {situationTypes.map((situation) => (
                                            <MenuItem
                                                value={situation}
                                                key={situation}
                                            >
                                                {situation}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Box>
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows={4}
                        defaultValue="Ticket Description"
                        sx={{ marginTop: '25px', width: '100%' }}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Equipment identification"
                        defaultValue="Example: AOC32167"
                        sx={{ marginTop: '25px', width: '100%' }}
                    />

                    <Button
                        variant="contained"
                        size="large"
                        sx={{
                            width: '100%',
                            marginTop: '25px',
                            height: '60px',
                        }}
                    >
                        Create Ticket
                    </Button>
                </CardContent>
            </Card>
        </Box>
    );
}
export default TicketRegistration;
