import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Estimation, IssueFormFields } from "./IssueForm.types";
import { issueFormSchema, IssueFormSchemaFields } from "./IssueForm.schema";
import { useQuery } from "react-query";

export const useIssueForm = (arg: {}) => {
  const form = useForm({
    resolver: yupResolver(issueFormSchema),
    reValidateMode: "onSubmit",
    mode: "all",
    defaultValues: {
      [IssueFormFields.Owner]: ``,
      [IssueFormFields.Repo]: ``,
      [IssueFormFields.Title]: ``,
      [IssueFormFields.Body]: ``,
    },
  });

  // TODO: separate query from form
  const { isLoading, data } = useQuery<Estimation>("estimation", async () =>
    (
      await fetch(
        `http://localhost:8080/issue/estimateProperties/${
          form.getValues().owner
        }/${form.getValues().repo}`
      )
    ).json()
  );

  const onSubmit = ({ owner, repo, title, body }: IssueFormSchemaFields) => {
    console.log({ owner, repo, title, body });
  };

  return { onSubmit, ...form, data, isLoading, ...arg };
};
