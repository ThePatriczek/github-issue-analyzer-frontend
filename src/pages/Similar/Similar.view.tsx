import React, { FC } from "react";
import {useSimilarPage} from "./useSimilarPage";
import {Grid} from "@mui/material";
import {RepositoryItem} from "../../Components/RepositoryItem";



export const SimilarPageView: FC<ReturnType<typeof useSimilarPage>> = ({repositories,onCardClick}) => (
    <Grid container spacing={1}>
      {repositories?.map(({ owner, name, description, language, stars }) => (
          <RepositoryItem key={name} onClick={onCardClick(owner, name)} name={name} description={description} language={language}
                          stars={stars}/>
      ))}
    </Grid>
);
