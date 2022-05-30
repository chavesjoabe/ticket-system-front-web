export const MESSAGE_CONSTANTS = {
  USER: {
    USER_CREATED_WITH_SUCCESS: "User Created with success",
    ERROR_ON_CREATE_USER: "Error on create User",
  },
  TICKET: {
    TICKET_CREATED_WITH_SUCCESS: (id) =>
      `Ticket id: ${id} Created with success`,
    ERROR_ON_CREATE_TICKET: "Error on create Ticket",
  },
  LOGIN: {
    USER_LOGGED_WITH_SUCCESS: "User logged with success",
    ERROR_ON_LOGIN: (message) => {
      return `Error on login - ${message}`;
    },
  },
};
