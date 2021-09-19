import { User } from "../../pages/Home/hooks/useOwnerAutocomplete";
import { useIssueForm } from "./IssueForm.hook";

export enum IssueFormFields {
  Title = "title",
  Body = "body",
}

export type LabelType = {
  id: number;
  name: string;
};

export type Estimation = {
  labels: LabelType[];
  participants: User[];
  closedAt: string;
};

export type FormViewProps = ReturnType<typeof useIssueForm>;
