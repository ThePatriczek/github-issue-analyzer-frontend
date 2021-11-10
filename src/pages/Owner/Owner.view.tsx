import {
  Grid,
} from "@mui/material";
import React, { FC } from "react";
import { useOwnerPage } from "./useOwnerPage";
import {RepositoryItem} from "../../Components/RepositoryItem";



export const OwnerPageView: FC<ReturnType<typeof useOwnerPage>> = ({
  repositories,
  onCardClick,
}) => (
  <Grid container spacing={1}>
    {repositories?.map(({ name, description, language, stars }) => (
      <RepositoryItem key={name} onClick={onCardClick(name)} name={name} description={description} language={language}
                      stars={stars}/>
    ))}
  </Grid>
);
