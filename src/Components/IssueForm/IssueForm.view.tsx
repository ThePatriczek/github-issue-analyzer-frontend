import {
  Box,
  TextField,
  Avatar,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import dayjs from "dayjs";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { FormViewProps, IssueFormFields } from "./IssueForm.types";
import CalculateIcon from "@mui/icons-material/Calculate";

export const FormView: FC<FormViewProps> = ({
  onSubmit,
  handleSubmit,
  control,
  isLoading,
  data,
}) => (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Box>
      <Controller
        name={IssueFormFields.Title}
        control={control}
        render={({ field }) => (
          <TextField {...field} variant="outlined" fullWidth label={"Title"} />
        )}
      />
    </Box>
    <Box mt={2}>
      <Controller
        name={IssueFormFields.Body}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="outlined"
            fullWidth
            label={"Body"}
            multiline
            rows={10}
          />
        )}
      />
    </Box>

    {data && (
      <Box mt={10}>
        {isLoading && <Box>Loading...</Box>}

        <Box>
          {data.labels?.length > 0 && (
            <Box>
              <Typography>{`Estimated labels:`}</Typography>
              <ul>
                {data.labels.map(({ id, name }) => (
                  <li key={id}>{name}</li>
                ))}
              </ul>
            </Box>
          )}

          {data.participants?.length > 0 && (
            <Box>
              <Typography variant="h5">{`Users can help you`}</Typography>
              <List>
                {data.participants.map(({ login, name, avatarUrl }) => (
                  <ListItem key={login}>
                    <ListItemButton
                      component="a"
                      href={`https://github.com/${login}`}
                      target="_blank"
                    >
                      <ListItemAvatar>
                        <Avatar src={avatarUrl} alt={login} />
                      </ListItemAvatar>
                      <ListItemText primary={name} />
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {data.closedAt && (
            <Box>
              <Typography>
                {`Estimated date solving the issue: ${dayjs(
                  data.closedAt
                ).format(`DD. MM. YYYY`)}`}
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    )}
  </form>
);
