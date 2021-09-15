import { object, string, Asserts } from "yup";
import { IssueFormFields } from "./IssueForm.types";

export const issueFormSchema = object().shape({
  [IssueFormFields.Owner]: string().required(),
  [IssueFormFields.Repo]: string().required(),
  [IssueFormFields.Title]: string().required(),
  [IssueFormFields.Body]: string(),
});

export type IssueFormSchemaFields = Asserts<typeof issueFormSchema>;
