import { TableCell, TextField } from "@material-ui/core";
import React, { useState } from "react";

export const LineItem = (props) => {
  const [value, setValue] = useState(props.value);
  return (
    <>
      <TableCell>TEST</TableCell>
      <TableCell>TEST</TableCell>
      <TableCell>TEST</TableCell>
    </>
  );
};
