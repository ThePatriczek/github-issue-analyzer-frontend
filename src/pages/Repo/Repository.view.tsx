import React, { FC } from "react";
import { IssueForm } from "../../Components/IssueForm";
import {Button} from "@mui/material";
import {useRepositoryPage} from "./useRepositoryPage";

export const RepositoryPageView: FC<ReturnType<typeof useRepositoryPage>> = ({onSimilarRepositoriesClick}) => (
  <div>
      <Button onClick={onSimilarRepositoriesClick} variant={'contained'}>
          {`Similar repositories`}
      </Button>

    <IssueForm />
  </div>
);
