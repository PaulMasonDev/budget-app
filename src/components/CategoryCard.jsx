import {
  Button,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { LineItem } from "./LineItem";

const useStyles = makeStyles({
  card: {
    border: "2px solid grey",
  },
});

const tableArr = [
  { title: "ITEM", value: "" },
  { title: "SPENT", value: 0 },
  { title: "BUDGETED", value: 0 },
];

const infoArr = [{ name: "", spent: 0, budgeted: 0 }];

export const CategoryCard = () => {
  const [info, setInfo] = useState(infoArr);
  const classes = useStyles();
  const handleAdd = () => {};
  return (
    <Grid className={classes.card} item xl={4} lg={4} md={4} sm={4} xs={12}>
      <Typography variant="h2">Category</Typography>
      <Table>
        <TableHead>
          <TableRow>
            {tableArr.map((item) => {
              return <TableCell>{item.title}</TableCell>;
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {info?.map((item) => {
              return <LineItem item={item} />;
            })}
          </TableRow>
        </TableBody>
      </Table>
      <Grid item>
        <Button onClick={handleAdd} variant="contained" color="primary">
          ADD ITEM
        </Button>
      </Grid>
    </Grid>
  );
};
