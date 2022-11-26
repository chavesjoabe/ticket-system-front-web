import React, { useState } from 'react';
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
import TicketService from '../../services/ticket.service';
import useAuth from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { URL_CONSTANTS } from '../../constants/url.constants';

const ticketTypes = ['Routine', 'Complaint', 'Performance', 'Issue', 'Other'];
const situationTypes = ['Urgent', 'Normal'];

function TicketRegistration() {
    const [type, setType] = useState('');
    const [situation, setSituation] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [deviceId, setDeviceId] = useState('');
    const { user: data } = useAuth();
    const navigate = useNavigate();

    const handleOnChangeType = (event) => {
        setType(event.target.value);
    };

    const handleOnChangeSituation = (event) => {
        setSituation(event.target.value);
    };

    const handleOnChangeTitle = (event) => {
        setTitle(event.target.value);
    };

    const handleOnChangeDescription = (event) => {
        setDescription(event.target.value);
    };

    const handleOnChangeDeviceId = (event) => {
        setDeviceId(event.target.value);
    };

    const handleOnCancel = () => {
        navigate(URL_CONSTANTS.HOME);
    };

    const handleOnSubmit = async () => {
        const ticket = {
            description,
            type,
            situation,
            title,
            deviceId,
            userId: data.user._id,
            attendantId: '6262310a660fbba47e86a277',
            status: 'WAITING',
        };

        const createdTicket = await TicketService.createTicket(
            ticket,
            data.access_token
        );

        if (createdTicket && createdTicket._id) {
            navigate(URL_CONSTANTS.HOME);
        }

        return;
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
                        label="Title"
                        placeholder="Example: AOC342455"
                        value={title}
                        sx={{ marginTop: '25px', width: '100%' }}
                        onChange={handleOnChangeTitle}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        value={description}
                        rows={4}
                        placeholder="Ticket Description"
                        sx={{ marginTop: '25px', width: '100%' }}
                        onChange={handleOnChangeDescription}
                    />
                    <TextField
                        id="outlined-multiline-static"
                        label="Equipment identification"
                        placeholder="Example: AOC32167"
                        value={deviceId}
                        sx={{ marginTop: '25px', width: '100%' }}
                        onChange={handleOnChangeDeviceId}
                    />

                    <Grid container spacing={1}>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '100%',
                                    marginTop: '25px',
                                    height: '60px',
                                }}
                                onClick={handleOnCancel}
                                color="error"
                            >
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    width: '100%',
                                    marginTop: '25px',
                                    height: '60px',
                                }}
                                onClick={handleOnSubmit}
                            >
                                Create Ticket
                            </Button>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}
export default TicketRegistration;
