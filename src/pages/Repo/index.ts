import { wrap } from "@atlasgroup/react-wrap";
import { RepositoryPageView } from "./Repository.view";
import { useRepositoryPage } from "./useRepositoryPage";

export const RepositoryPage = wrap(RepositoryPageView, useRepositoryPage);