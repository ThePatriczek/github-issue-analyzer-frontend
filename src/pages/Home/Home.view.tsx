import { wrap } from "@atlasgroup/react-wrap";
import { Autocomplete, Box } from "@mui/material";
import React, { FC } from "react";
import { useOwnerAutocomplete } from "./hooks/useOwnerAutocomplete";

export const HomePageView: FC = () => (
  <Box>
    <h1>{`Choose an owner`}</h1>
    <OwnerAutocomplete />
  </Box>
);

const OwnerAutocomplete = wrap(Autocomplete as any, useOwnerAutocomplete);
