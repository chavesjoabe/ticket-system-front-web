import React from "react";

export const HasPermission = ({ children, user, onlyAdmin = false }) => {
  if (!onlyAdmin && user.type === 'ATTENDANT') {
    return (<>{children}</>)
  }

  if (onlyAdmin && user.type === 'ADMIN') {
    return (<>{children}</>)
  }
}
