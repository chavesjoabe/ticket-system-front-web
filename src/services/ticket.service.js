import axios from "axios";

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

  async findOneTicket(ticketId, token) {
    const { data } = await axios.get(
      `${process.env.REACT_APP_TICKET_API_URL}/${ticketId}`,
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

  async insertComment(ticketId, comment, token) {
    const { data } = await axios.post(
      `${process.env.REACT_APP_TICKET_API_URL}/insert-comment/${ticketId}`,
      comment,
      {
        headers: this.headers(token),
      }
    );

    return data;
  }

  async resolveTicket(ticketId, requestBody, token) {
    const { data } = await axios.put(
      `${process.env.REACT_APP_TICKET_API_URL}/resolve-ticket/${ticketId}`,
      requestBody,
      { headers: this.headers(token) }
    );
    return data;
  }
}
export default new TicketService();
