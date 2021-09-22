import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Estimation, IssueFormFields } from "./IssueForm.types";
import { issueFormSchema, IssueFormSchemaFields } from "./IssueForm.schema";
import { useQuery } from "react-query";
import { useRouter } from "next/dist/client/router";

export const useIssueForm = (arg: {}) => {
  const { query, isReady } = useRouter();
  const owner = query.owner;
  const repo = query.repo;

  const form = useForm<any>({
    resolver: yupResolver(issueFormSchema),
    reValidateMode: "onSubmit",
    mode: "all",
    defaultValues: {
      [IssueFormFields.Title]: ``,
      [IssueFormFields.Body]: ``,
    },
  });

  const { isLoading, data } = useQuery<Estimation>(
    "estimation",
    async () =>
      (
        await fetch(
          `http://localhost:8080/issue/estimateProperties/${owner}/${repo}`
        )
      ).json(),
    {
      enabled: isReady && !!owner && !!repo,
    }
  );

  const onSubmit = ({ owner, repo, title, body }: IssueFormSchemaFields) => {
    console.log({ owner, repo, title, body });
  };

  console.log(data);

  return { onSubmit, ...form, data, isLoading, ...arg };
};
