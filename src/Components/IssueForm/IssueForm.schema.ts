import { object, string, Asserts } from "yup";
import { IssueFormFields } from "./IssueForm.types";

export const issueFormSchema = object().shape({
  [IssueFormFields.Title]: string().required(),
  [IssueFormFields.Body]: string(),
});

export type IssueFormSchemaFields = Asserts<typeof issueFormSchema>;
