import { wrap } from "@atlasgroup/react-wrap";
import { OwnerPageView } from "./Owner.view";
import { useOwnerPage } from "./useOwnerPage";

export const OwnerPage = wrap(OwnerPageView, useOwnerPage);
