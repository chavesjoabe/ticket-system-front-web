import axios from 'axios';

class TicketService {
    headers = (token) => {
        return {
            Authorization: `Bearer ${token}`,
        };
    };
    async getTickets(userId, token) {
        const { data } = await axios.get(
            `${process.env.REACT_APP_TICKET_API_URL}?userId=${userId}`,
            {
                headers: this.headers(token),
            }
        );

        return data;
    }

    async createTicket(ticket, token) {
        const { data } = await axios.post(
            `${process.env.REACT_APP_TICKET_API_URL}`,
            ticket,
            {
                headers: this.headers(token),
            }
        );

        return data;
    }
}

export default new TicketService();
