import { TextField, Button, Box } from "@material-ui/core";
import { FC } from "react";
import { Controller } from "react-hook-form";
import { FormViewProps, IssueFormFields } from "./IssueForm.types";

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
        name={IssueFormFields.Owner}
        control={control}
        render={({ field }) => (
          <TextField {...field} variant="filled" fullWidth label={"Owner"} />
        )}
      />
    </Box>
    <Box>
      <Controller
        name={IssueFormFields.Repo}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            fullWidth
            label={"Repository"}
          />
        )}
      />
    </Box>
    <Box>
      <Controller
        name={IssueFormFields.Title}
        control={control}
        render={({ field }) => (
          <TextField {...field} variant="filled" fullWidth label={"Title"} />
        )}
      />
    </Box>
    <Box>
      <Controller
        name={IssueFormFields.Body}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            variant="filled"
            fullWidth
            label={"Body"}
            multiline
          />
        )}
      />
    </Box>
    <Box>
      <Button type={"submit"} fullWidth>
        submit
      </Button>
    </Box>
    {isLoading && <Box>Loading...</Box>}

    {data && (
      <Box>
        labels:
        <ul>
          {data.labels.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
        participants:
        <ul>
          {data.participants.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
        {data.closedAt && <Box>closed at: {data.closedAt}</Box>}
      </Box>
    )}
  </form>
);
