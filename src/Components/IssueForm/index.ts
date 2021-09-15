import { wrap } from "@atlasgroup/react-wrap";
import { useIssueForm } from "./IssueForm.hook";
import { FormView } from "./IssueForm.view";

export const IssueForm = wrap(FormView, useIssueForm);
