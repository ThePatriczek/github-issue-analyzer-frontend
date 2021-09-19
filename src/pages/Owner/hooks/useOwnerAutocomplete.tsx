import { AutocompleteProps, Avatar, Box, TextField } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React from "react";

type AutocompleteOption = {
  login: string;
  name: string;
  avatarUrl: string;
};

type OwnerAutocompleteProps = AutocompleteProps<
  AutocompleteOption,
  false,
  false,
  false
>;

const MOCKED_OPTIONS = [
  {
    login: "ThePatriczek",
    name: `Patrik Szewczyk`,
    avatarUrl: "https://avatars.githubusercontent.com/u/29193319?v=4",
  },
];

export const useOwnerAutocomplete = (
  props?: OwnerAutocompleteProps
): OwnerAutocompleteProps => {
  const { push } = useRouter();
  const onChange: OwnerAutocompleteProps["onChange"] = (_, option) => {
    if (option) {
      push({
        pathname: `/[owner]`,
        query: { owner: option.login },
      }).catch(console.error);
    }
  };

  return {
    id: `owner`,
    loading: true,
    options: MOCKED_OPTIONS,
    onChange,
    getOptionLabel: ({ login }) => login,
    renderInput: (params) => <TextField {...params} label="Choose an owner" />,
    renderOption: (props, { login, avatarUrl }) => (
      <Box component="li" {...props}>
        <Avatar src={avatarUrl} alt={login} sx={{ width: 24, height: 24 }} />
        {login}
      </Box>
    ),
  };
};
