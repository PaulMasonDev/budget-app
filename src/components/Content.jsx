import React from "react";
import { Grid } from "@material-ui/core";
import { CategoryCard } from "./CategoryCard";

export const Content = () => {
  return (
    <Grid container alignItems="center" justifyContent="space-evenly">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </Grid>
  );
};
