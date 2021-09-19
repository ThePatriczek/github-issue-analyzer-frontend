import { AutocompleteProps, Avatar, Box, TextField } from "@mui/material";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { useQuery } from "react-query";

export type User = {
  login: string;
  name: string;
  avatarUrl: string;
};

type OwnerAutocompleteProps = AutocompleteProps<User, false, false, false>;

export const useOwnerAutocomplete = (
  props?: OwnerAutocompleteProps
): OwnerAutocompleteProps => {
  const { push } = useRouter();
  const [inputValue, setInputValue] = useState<string>(``);

  const { isLoading, data, isFetching } = useQuery<{
    users: User[];
  }>(
    "users",
    async () =>
      inputValue &&
      (await fetch(`http://localhost:8080/user?query=${inputValue}`)).json()
  );

  const options = data?.users || [];

  const onChange: OwnerAutocompleteProps["onChange"] = (_, option) => {
    if (option) {
      push({
        pathname: `/[owner]`,
        query: { owner: option.login },
      }).catch(console.error);
    }
  };

  const onInputChange: OwnerAutocompleteProps["onInputChange"] = (
    _,
    newInputValue
  ) => setInputValue(newInputValue);

  return {
    id: `owner`,
    loading: isLoading || isFetching,
    options,
    onChange,
    inputValue,
    onInputChange,
    noOptionsText: ``,
    fullWidth: true,
    getOptionLabel: ({ login }) => login,
    renderInput: (params) => (
      <TextField {...params} label="Choose an owner..." />
    ),
    renderOption: (props, { login, avatarUrl }) => (
      <Box component="li" {...props}>
        <Avatar src={avatarUrl} alt={login} sx={{ width: 24, height: 24 }} />
        {login}
      </Box>
    ),
  };
};
