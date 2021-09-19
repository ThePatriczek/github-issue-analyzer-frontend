import { wrap } from "@atlasgroup/react-wrap";
import { Autocomplete } from "@mui/material";
import React, { FC } from "react";
import { useOwnerAutocomplete } from "../Owner/hooks/useOwnerAutocomplete";

export const HomePageView: FC = () => (
  <div>
    <OwnerAutocomplete />
  </div>
);

const OwnerAutocomplete = wrap(Autocomplete as any, useOwnerAutocomplete);
