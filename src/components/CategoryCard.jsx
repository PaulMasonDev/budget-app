import {
  Grid,
  makeStyles,
  Table,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import React from "react";
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

export const CategoryCard = () => {
  const classes = useStyles();

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
        <TableHead>
          <TableRow>
            {tableArr?.map((item) => {
              return <LineItem value={item.value} />;
            })}
          </TableRow>
        </TableHead>
      </Table>
    </Grid>
  );
};
