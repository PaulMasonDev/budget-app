import { TableCell, TableRow, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { LineItem } from "./LineItem";

export const LineItemBox = ({ lineItems }) => {
  console.log({ lineItems });
  return (
    <TableRow>
      {lineItems?.map((item) => {
        return <LineItem />;
      })}
    </TableRow>
  );
};
