import {Box} from "@mui/material";
import React from "react";

export const HasPermission = ({ children, user }) => {
  if (user.type === 'ATTENDANT') {
    return (<>{children}</>)
  }
}
