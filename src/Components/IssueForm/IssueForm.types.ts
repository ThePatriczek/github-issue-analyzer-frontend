import { useIssueForm } from "./IssueForm.hook";

export enum IssueFormFields {
  Repo = "repo",
  Owner = "owner",
  Title = "title",
  Body = "body",
}

export type LabelType = {
  id: number;
  name: string;
};

export type Estimation = {
  labels: LabelType[];
  participants: string[];
  closedAt: string;
};

export type FormViewProps = ReturnType<typeof useIssueForm>;
